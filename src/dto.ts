export class CreateCompanyDto {
    name: string;
    location: string;
}

export class CreateJobPostDto {
    company_id: number;
    title: string;
    description: string;
    skills: string[];
}

export class CreateSeekerProfileDto {
    name: string;
    email: string;
    skills: string
}