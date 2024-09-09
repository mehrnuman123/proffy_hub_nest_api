import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Company } from 'src/company/compnay.entity';
import { Skill } from 'src/skills/skill.entity';

@Entity()
export class JobListing {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', name: 'title'})
  public title: string;

  @Column({ type: 'varchar', name: 'description'})
  public description: string;

  @ManyToOne(() => Company, (company) => company.jobListings)
  public company: Company;

  @ManyToMany(() => Skill)
  @JoinTable({name: 'jobListing_skill'})
  requiredSkills: Skill[];
}
