import {ArtifactModel} from "@/lib/models";
import {technologies} from "@/lib/data/technologies";

export const artifacts: ArtifactModel[] = [
    {
        id: 1,
        name: "Tactical Pigeons 🐦",
        imageUrl: "/assets/mockups/tactical-pigeon.svg",
        summaryText: "A pigeon focused, turn based multiplayer strategy game where you attack, defend, and steal food from rival pigeons. The interdisciplinary term project in our second semester at BCIT using the foundational skills we learned so far.",
        technologies: [
            {
                list: [technologies["C#"], technologies["MySQL"], technologies["MSSQL"], technologies["PostgreSQL"], technologies["Sqlite"], technologies["Neo4j"], technologies["Redis"], technologies["MongoDB"], technologies["AWS"], technologies["Azure"], technologies["Docker"], technologies["Virtual Machines"], technologies["Linux"], technologies["OOP"], technologies["MVC"], technologies["MVVM"], technologies["Serverless Functions"], technologies["Microservices"]],
                shouldMarquee: true
            },
            {
                list: [technologies["PHP"], technologies["JavaScript"], technologies["TypeScript"], technologies["NestJs"], technologies["React"], technologies["Next.js"], technologies["Express.js"], technologies[".NET Core"]],
                shouldMarquee: true
            }
        ]
    },
];

