import { Body, Controller, Inject, Post, Req, Res } from '@nestjs/common';
import { JobListingService } from './job-listing.service';
import { CreateJobPostDto } from 'src/dto';

@Controller('job-listing')
export class JobListingController {
    @Inject(JobListingService)
    private readonly service: JobListingService;


    @Post('/create')
    private async create(@Body() body: CreateJobPostDto, @Res() res, @Req() req) {
        try {
            if (isNaN(body.company_id)) {
                return res.status(500).json({ message: 'Id must be number' });
            }
            const profile = await this.service.find(body.company_id)
            if (!profile) return res.status(404).json({ message: 'Company profile does not exist' });
            const job_listing = await this.service.createJobPost(body, profile)
            return res.status(201).json({ response: 'Job posted successfully !!', Job_Listing: job_listing });
        }
        catch (e) {
            console.log(e);
            return res.status(500).json({ message: 'something went wrong' });
        }
    }
}
