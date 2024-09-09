import { Module } from '@nestjs/common';
import { JobListingService } from './job-listing.service';
import { JobListingController } from './job-listing.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobListing } from './job-listing.entity';
import { Company } from 'src/company/compnay.entity';
import { CompanyService } from 'src/company/company.service';
import { Skill } from 'src/skills/skill.entity';
import { Seeker } from 'src/seeker/seeker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobListing,Company, Skill, Seeker])],
  providers: [JobListingService],
  controllers: [JobListingController]
})
export class JobListingModule {}
