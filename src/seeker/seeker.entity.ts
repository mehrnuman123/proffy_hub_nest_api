import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { Skill } from 'src/skills/skill.entity';

@Entity()
export class Seeker {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({ type: 'varchar', name: 'name' })
    public name!: string;

    @Column({ type: 'varchar', unique: true, name: 'email' })
    email!: string;

    @ManyToMany(() => Skill)
    @JoinTable({name: 'seeker_skills'})
    skills: Skill[];
}
