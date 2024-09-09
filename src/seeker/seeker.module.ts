import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/company/compnay.entity';
import { JobListing } from 'src/job-listing/job-listing.entity';
import { Skill } from 'src/skills/skill.entity';
import { SeekerController } from './seeker.controller';
import { Seeker } from './seeker.entity';
import { SeekerService } from './seeker.service';

@Module({
  imports: [TypeOrmModule.forFeature([Seeker, JobListing, Company, Skill])],
  controllers: [SeekerController],
  providers: [SeekerService]
})
export class SeekerModule {}
