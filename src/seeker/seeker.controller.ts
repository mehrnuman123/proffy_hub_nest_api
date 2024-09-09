import { Body, Controller, Get, Inject, Param, Post, Req, Res } from '@nestjs/common';
import { CreateSeekerProfileDto } from 'src/dto';
import { JobListingService } from 'src/job-listing/job-listing.service';
import { SeekerService } from './seeker.service';

@Controller('seeker')
export class SeekerController {
    @Inject(SeekerService)
    private readonly service: SeekerService;

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

    @Get('/job-listing/:userId')
    private async getJobListingByUserId(@Param('userId') id: number, @Res() res) {
        try {
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
            return res.status(500).json({ message: 'something went wrong' });

        }
    

    }

}
