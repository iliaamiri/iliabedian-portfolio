import {ArtifactModel} from "@/lib/models";
import {technologies} from "@/lib/data/technologies";

export const artifacts: Record<string, ArtifactModel> = {
    tacticalPigeons: {
        id: 1,
        name: "Tactical Pigeons 🐦",
        slug: "tactical-pigeon",
        imageUrl: "/assets/mockups/tactical-pigeon.svg",
        summaryText: "A pigeon focused, turn based multiplayer strategy game where you attack, defend, and steal food from rival pigeons. The interdisciplinary term project in our second semester at BCIT using the foundational skills we learned so far.",
        technologies: [
            {
                list: [
                    technologies["MySQL"], technologies["OOP"], technologies["MVC"], technologies["Serverless Functions"],
                    technologies["JavaScript"], technologies["Express.js"], technologies["Socket.io"], technologies["Railway"],
                ],
                shouldMarquee: true
            },
            {
                list: [
                    technologies["Git"], technologies["GitHub"], technologies["Trello"], technologies["Figma"], technologies["Events"],
                    technologies["HTML"], technologies["CSS"], technologies["Bootstrap"], technologies["EJS"],
                ],
                shouldMarquee: true
            }
        ],
        githubUrl: "https://github.com/iliaamiri/tactical-pigeon",
        demoUrl: "https://tactical-pigeon-production.up.railway.app/",
        primaryThemeColor: "#22246A",
        tailwindClassDetection: "via-[#22246A]",
    },
    igaq: {
        id: 2,
        name: "IGAQ 🏳️‍🌈",
        slug: "igaq",
        imageUrl: "/assets/mockups/igaq.svg",
        summaryText: "I Got A Queery (IGAQ) provides a safe space for the members of the LGBTQ+ community to ask questions, share stories, and read resources about all things LGBTQ+.",
        technologies: [
            {
                list: [technologies['TypeScript'], technologies['NestJs'], technologies['Neo4j'], technologies['Git'], technologies['Pusher.js'], technologies['MVC'], technologies['Event-driven Architecture']],
                shouldMarquee: true
            },
            {
                list: [technologies['JavaScript'], technologies['Next.js'], technologies['Serverless Functions'], technologies['Vercel'], technologies['Styled Components'], technologies['Material UI'], technologies['Figma']],
                shouldMarquee: true
            }
        ],
        githubUrl: "https://github.com/IGAQ/NestServer",
        demoUrl: "https://www.igaq.gay/",
        primaryThemeColor: "#EF6C9A", // ef6c9a
        tailwindClassDetection: "via-[#EF6C9A]",
    },
    interviewpal: {
        id: 3,
        name: "InterviewPal 🤖",
        slug: "interviewpal",
        imageUrl: "/assets/mockups/interviewpal.png",
        summaryText: "InterviewPal is a GPT-3.5 powered AI that helps you practice for your interviews. It will ask you common and relevant interview questions and give you insightful feedback on your answers.",
        technologies: [
            {
                list: [
                    technologies["TypeScript"], technologies["Redis"], technologies["OpenAI API"], technologies["TailwindCSS"], technologies["Git"], technologies["GitHub"], technologies["GitLab"], technologies["Trello"]
                ],
                shouldMarquee: true
            },
            {
                list: [
                    technologies["Vercel"], technologies["Serverless Functions"], technologies["Railway"], technologies["Prompt Engineering"],
                    technologies["JSX"], technologies["CSS"], technologies['React'], technologies['OOP']
                ],
                shouldMarquee: true
            },
        ],
        githubUrl: "https://github.com/InterviewPal/InterviewPal",
        demoUrl: "https://interviewpal.vercel.app/",
        primaryThemeColor: "#191724",
        tailwindClassDetection: "via-[#191724]",
    },
    coughie: {
        id: 4,
        name: "Coughie ☕",
        slug: "coughie",
        imageUrl: "/assets/mockups/coughie.svg",
        summaryText: "Coughie is a mobile-first web application designed to help people who want to quit their vaping habit. Users can input, track their progress, join a community, while growing their virtual plant 🌱.",
        technologies: [
            {
                list: [
                    technologies['JavaScript'], technologies['Preact'], technologies['Local Storage'], technologies['Vite'], technologies['Railway'], technologies['Git'], technologies['GitHub'], technologies['Trello']
                ],
                shouldMarquee: true
            },
            {
                list: [
                    technologies['CSS'], technologies['HTML'], technologies['JSX'], technologies['Animation'], technologies['Prototyping'], technologies['UI'], technologies['UX'], technologies['Design'], technologies['Figma'], technologies['Illustration'], technologies['Wireframing']
                ],
                shouldMarquee: true
            },
        ],
        githubUrl: "https://github.com/iliaamiri/coughie-app",
        demoUrl: "https://coughie-app-production.up.railway.app/",
        primaryThemeColor: "#81CBAC",
        tailwindClassDetection: "via-[#81CBAC]",
    }
};

