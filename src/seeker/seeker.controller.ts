import { Body, Controller, Get, Inject, Param, Post, Req, Res } from '@nestjs/common';
import { SeekerService } from './seeker.service';
import { CreateCompanyDto, CreateSeekerProfileDto } from 'src/dto';
import { JobListingService } from 'src/job-listing/job-listing.service';

@Controller('seeker')
export class SeekerController {
    @Inject(SeekerService)
    private readonly service: SeekerService;

    @Inject(JobListingService)
    private readonly jobListingService: JobListingService

    @Post('/register')
    private async createProfile(@Body() body: CreateSeekerProfileDto, @Res() res, @Req() req) {
        try {

            const profile = await this.service.register(body)
            return res.status(201).json({ response: 'Succes, Please remember your registration Id', registration_id: profile.id });
        }
        catch (e) {
            console.log(e);

            return res.status(500).json({ message: 'something went wrong' });
        }
    }

    @Get('/job-listing/:id')
    private async getJobListingByUserId(@Param('id') id: number, @Res() res) {

        try {

            console.log(id, 'id');

            if (isNaN(id)) {
                return res.status(500).json({ message: 'Id must be number' });
            }
            const seekerSkills = await this.service.find(id)
           
            if (!seekerSkills) return res.status(404).json({ message: 'Profile or skills not found' });
            const matchJobListing = await this.service.findMatchJobs(seekerSkills)

            return res.status(201).json({ response: 'Matching jobs', Jobs: matchJobListing });
        }
        catch (e) {
            console.log(e);

        }
        //    const matchSkills = await this.jobListingService.matchJobListing(userProfile.skills)


    }

}
