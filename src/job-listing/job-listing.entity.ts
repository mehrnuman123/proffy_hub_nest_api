import { Company } from 'src/company/compnay.entity';
import { Skill } from 'src/skills/skill.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
