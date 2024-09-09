import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './compnay.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CompanyService {
    @InjectRepository(Company)
    private readonly repository: Repository<Company>;

    public async register(body): Promise<Company | never> {
        const { name, location } = body;

        const profile = new Company();
        profile.name = name;
        profile.location = location
        return this.repository.save(profile);
    }
}
