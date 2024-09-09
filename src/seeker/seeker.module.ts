import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/company/compnay.entity';
import { JobListing } from 'src/job-listing/job-listing.entity';
import { JobListingService } from 'src/job-listing/job-listing.service';
import { SeekerController } from './seeker.controller';
import { Seeker } from './seeker.entity';
import { SeekerService } from './seeker.service';
import { Skill } from 'src/skills/skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seeker, JobListing, Company, Skill])],
  controllers: [SeekerController],
  providers: [SeekerService, JobListingService]
})
export class SeekerModule {}
