import { Injectable } from '@nestjs/common';
import { Seeker } from './seeker.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSeekerProfileDto } from 'src/dto';
import { Skill } from 'src/skills/skill.entity';
import { JobListing } from 'src/job-listing/job-listing.entity';

@Injectable()
export class SeekerService {
    @InjectRepository(Seeker)
    private readonly seekerRepo: Repository<Seeker>;

    @InjectRepository(JobListing)
    private readonly jobListing: Repository<JobListing>

    @InjectRepository(Skill)
    private readonly sKillRepo: Repository<Skill>;


    public async register(body: CreateSeekerProfileDto): Promise<Seeker | never> {
        const { name, email, skills } = body;


        const skillsList: Skill[] = [];
        for (const skillName of skills) {
            let skill = await this.sKillRepo.findOne({ where: { name: skillName } });
            if (!skill) {
                skill = new Skill()
                skill.name = skillName
                await this.sKillRepo.save(skill);
            }
            skillsList.push(skill);
        }
        const profile = new Seeker();
        profile.name = name;
        profile.skills = skillsList
        profile.email = email
        return this.seekerRepo.save(profile);
    }


    public async find(seekerId): Promise<Seeker | undefined> {

        return await this.seekerRepo.findOne({
            where: { id: seekerId },
            relations: ['skills'],
        });
    }

    public async findMatchJobs(skillsArray) {
        const seekerSkills = skillsArray.skills.map(skill => skill.id);

        const allJobListings = await this.jobListing.find({
            relations: ['requiredSkills'],
        });

        const matchingJobs = allJobListings.filter(job => {
            const requiredSkillIds = job.requiredSkills.map(skill => skill.id);
            // number of seeker skills
            const matchedSkillsCount = requiredSkillIds.filter(skillId => seekerSkills.includes(skillId)).length;

            // percentage calculation
            const matchPercentage = (matchedSkillsCount / requiredSkillIds.length) * 100;

            

            return matchPercentage >= 51;
        });

        return matchingJobs;
    }
}
