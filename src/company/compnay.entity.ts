import { JobListing } from 'src/job-listing/job-listing.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', name: 'name'})
  public name: string;

  @Column({ type: 'varchar', name: 'location'})
  public location: string;

  @OneToMany(() => JobListing, (jobListing) => jobListing.company)
  public jobListings: JobListing[];
}
