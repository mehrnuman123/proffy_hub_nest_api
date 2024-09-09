import { Body, Controller, Post, Res, Req } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from 'src/dto';

@Controller('company')
export class CompanyController {
    @Inject(CompanyService)
    private readonly service: CompanyService;

    @Post('/register')
    private async createProfile(@Body() body: CreateCompanyDto, @Res() res, @Req() req) {
        try {
            if (body.name && body.location) {
                const profile = await this.service.register(body)
                return res.status(201).json({ response: 'Succes, Please remember your registration Id', registration_id: profile.id });
            }
        }
        catch (e) {
            return res.status(500).json({ message: 'something went wrong' });
        }
    }

}
