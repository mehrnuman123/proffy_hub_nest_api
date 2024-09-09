# Proffy Hub Nest API

## Getting Started

Clone the repo:  
`https://github.com/mehrnuman123/proffy_hub_nest_api.git`

Install Node.js (required version: 20).  
Install node modules:  
`npm i`

## Database Setup
Set up PostgreSQL with the following credentials:

type: 'postgres',
host: 'localhost',
port: 5432,
username: 'postgres',
password: 'postgres',
database: 'proffyhub'

## Start application:
`npm run start:dev`

## Testing Instructions

1. Import Postman collections (file attached with my email).
2. Create a company profile and note the company:id to create job posts.
3. Create a User/Seeker profile.
4. Create a job post using the company_id and provide the required credentials.
5. Fetch a list of matching jobs using userId.

## Job Seeker Sills

["python", "javascript", "react.js", "node.js", "java", "sql", "docker", "aws"]

## Job Posts

{
  "company_id": 1,
  "title": "Full Stack Developer",
  "description": "Join our dynamic team as a full-stack developer to build robust web applications from scratch, handling both backend and frontend tasks.",
  "skills": ["python", "javascript", "react.js", "node.js", "html", "css", "graphql"]
}


{
  "company_id": 1,
  "title": "Java/Python Developer",
  "description": "Join our dynamic team as a full-stack developer to build robust web applications from scratch, handling both backend and frontend tasks.",
  "skills": ["java", "sql", "docker", "python", "kubernetes", "aws", "typescript"]

}

{
  "company_id": 1,
  "title": "Php Developer",
  "description": "Join our dynamic team as a full-stack developer to build robust web applications from scratch, handling both backend and frontend tasks.",
  "skills": ["figma", "bootstrap", "php", "html", "wordpress", "azure"]

}

{
  "company_id": 1,
  "title": "MERN Stack Developer",
  "description": "Join our dynamic team as a full-stack developer to build robust web applications from scratch, handling both backend and frontend tasks.",
  "skills": ["javascript", "react.js", "node.js", "azure"]

}

{
  "company_id": 1,
  "title": "Full Stack Developer",
  "description": "Join our dynamic team as a full-stack developer to build robust web applications from scratch, handling both backend and frontend tasks.",
  "skills": ["Angular", "javascript", "c#", ".net", "html", "azure", ]

}

{
  "company_id": 1,
  "title": "Senior Full Stack Developer",
  "description": "Join our dynamic team as a full-stack developer to build robust web applications from scratch, handling both backend and frontend tasks.",
  "skills": ["python", "javascript", "react.js", "node.js", "c#", ".net", "html", "azure", ]

}

