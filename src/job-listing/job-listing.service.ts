import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/company/compnay.entity';
import { Repository } from 'typeorm';
import { JobListing } from './job-listing.entity';
import { CreateJobPostDto } from 'src/dto';
import { Skill } from 'src/skills/skill.entity';

@Injectable()
export class JobListingService {
    @InjectRepository(JobListing)
    private readonly jobListRepo: Repository<JobListing>;

    @InjectRepository(Skill)
    private readonly skillRepo: Repository<Skill>

    @InjectRepository(Company)
    private readonly companyRepo: Repository<Company>;

    public async find(id): Promise<Company | undefined> {
        return await this.companyRepo.findOne({ where: { id: id } });
    }

    public async createJobPost(body: CreateJobPostDto, company): Promise<JobListing | undefined> {
        const { title, skills, description } = body;

        const skillsList: Skill[] = [];
        for (const skillName of skills) {
            let skill = await this.skillRepo.findOne({ where: { name: skillName } });
            if (!skill) {
                skill = new Skill()
                skill.name = skillName
                await this.skillRepo.save(skill);
            }
            skillsList.push(skill);
        }

        const job_listing = new JobListing();


        job_listing.company = company
        job_listing.title = title
        job_listing.description = description
        job_listing.requiredSkills = skillsList
        return this.jobListRepo.save(job_listing);
    }

    public async matchJobListing(skills): Promise<JobListing[] | undefined> {
        console.log(skills, 'data');

        const userSkills = JSON.parse(skills);
        console.log(userSkills, "user skills ============");


        return
    }
}
