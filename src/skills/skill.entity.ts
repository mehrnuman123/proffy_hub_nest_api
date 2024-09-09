import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { JobListing } from 'src/job-listing/job-listing.entity';
import { Seeker } from '../seeker/seeker.entity';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public name: string;

  @ManyToMany(() => JobListing, jobListing => jobListing.requiredSkills)
  public jobListing: JobListing[];

  @ManyToMany(() => Seeker, jobSeeker => jobSeeker.skills)
  public jobSeeker: Seeker[];
}
