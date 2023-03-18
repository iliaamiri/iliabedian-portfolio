import {TechnologyModel} from "@/lib/models";

type skills =
    'C#'
    | 'PHP'
    | 'JavaScript'
    | 'TypeScript'
    | 'NestJs'
    | 'React'
    | 'Next.js'
    | 'Express.js'
    | '.NET Core'
    |
    'Laravel'
    | 'Python'
    | 'Flask'
    | 'MySQL'
    | 'MSSQL'
    | 'PostgreSQL'
    | 'Sqlite'
    | 'Neo4j'
    | 'Redis'
    | 'MongoDB'
    | 'AWS'
    |
    'Azure'
    | 'Docker'
    | 'Virtual Machines'
    | 'Linux'
    | 'OOP'
    | 'MVC'
    | 'MVVM'
    | 'Serverless Functions'
    | 'Microservices';

export const technologies: Record<skills, TechnologyModel> = {
    "C#": {
        skillName: "C#",
        confidenceLevel: 100
    },
    PHP: {
        skillName: "PHP",
        confidenceLevel: 100
    },
    JavaScript: {
        skillName: "JavaScript",
        confidenceLevel: 100
    },
    TypeScript: {
        skillName: "TypeScript",
        confidenceLevel: 100
    },
    NestJs: {
        skillName: "NestJs",
        confidenceLevel: 100
    },
    React: {
        skillName: "React",
        confidenceLevel: 100
    },
    "Next.js": {
        skillName: "Next.js",
        confidenceLevel: 100
    },
    "Express.js": {
        skillName: "Express.js",
        confidenceLevel: 100
    },
    ".NET Core": {
        skillName: ".NET Core",
        confidenceLevel: 100
    },
    Laravel: {
        skillName: "Laravel",
        confidenceLevel: 100
    },
    Python: {
        skillName: "Python",
        confidenceLevel: 100
    },
    Flask: {
        skillName: "Flask",
        confidenceLevel: 100
    },
    MySQL: {
        skillName: "MySQL",
        confidenceLevel: 100
    },
    MSSQL: {
        skillName: "MSSQL",
        confidenceLevel: 100
    },
    PostgreSQL: {
        skillName: "PostgreSQL",
        confidenceLevel: 100
    },
    Sqlite: {
        skillName: "Sqlite",
        confidenceLevel: 100
    },
    Neo4j: {
        skillName: "Neo4j",
        confidenceLevel: 100
    },
    Redis: {
        skillName: "Redis",
        confidenceLevel: 100
    },
    MongoDB: {
        skillName: "MongoDB",
        confidenceLevel: 100
    },
    AWS: {
        skillName: "AWS",
        confidenceLevel: 100
    },
    Azure: {
        skillName: "Azure",
        confidenceLevel: 100
    },
    Docker: {
        skillName: "Docker",
        confidenceLevel: 100
    },
    "Virtual Machines": {
        skillName: "Virtual Machines",
        confidenceLevel: 100
    },
    Linux: {
        skillName: "Linux",
        confidenceLevel: 100
    },
    OOP: {
        skillName: "OOP",
        confidenceLevel: 100
    },
    MVC: {
        skillName: "MVC",
        confidenceLevel: 100
    },
    MVVM: {
        skillName: "MVVM",
        confidenceLevel: 100
    },
    "Serverless Functions": {
        skillName: "Serverless Functions",
        confidenceLevel: 100
    },
    Microservices: {
        skillName: "Microservices",
        confidenceLevel: 100
    }
};

// BE/FE related technologies: TypeScript, JavaScript, NestJs, React, Next.js, Express.js, C#, .NET Core, PHP, Laravel, Python, Flask
// Database related: MySQL, MSSQL, PostgreSQL, Sqlite, Neo4j, Redis, MongoDB
// Others: AWS, Azure, Docker, Virtual Machines, Linux, OOP, MVC, MVVM, Serverless Functions, Microservices
