import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/company/compnay.entity';
import { Seeker } from 'src/seeker/seeker.entity';
import { Skill } from 'src/skills/skill.entity';
import { JobListingController } from './job-listing.controller';
import { JobListing } from './job-listing.entity';
import { JobListingService } from './job-listing.service';

@Module({
  imports: [TypeOrmModule.forFeature([JobListing,Company, Skill, Seeker])],
  providers: [JobListingService],
  controllers: [JobListingController]
})
export class JobListingModule {}
