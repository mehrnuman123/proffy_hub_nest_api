import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './company/compnay.entity';
import { JobListing } from './job-listing/job-listing.entity';
import { Seeker } from './seeker/seeker.entity';
import { CompanyModule } from './company/company.module';
import { JobListingModule } from './job-listing/job-listing.module';
import { SeekerModule } from './seeker/seeker.module';
import { Skill } from './skills/skill.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',   
      port: 5432,                    
      username: 'postgres',     
      password: 'postgres',    
      database: 'proffyhub',    
      entities: [Company, JobListing, Seeker, Skill],        
      synchronize: true
    }),
    CompanyModule,
    JobListingModule,
    SeekerModule
  ],
})
export class AppModule {}
