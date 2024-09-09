import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { JobListing } from 'src/job-listing/job-listing.entity';
import { Seeker } from '../seeker/seeker.entity';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => JobListing, jobListing => jobListing.requiredSkills)
  jobListing: JobListing[];

  @ManyToMany(() => Seeker, jobSeeker => jobSeeker.skills)
  jobSeeker: Seeker[];
}
