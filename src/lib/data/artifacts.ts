import {ArtifactCategory, ArtifactModel} from "@/lib/models";
import {technologies} from "@/lib/data/technologies";

export const artifacts: Record<string, ArtifactModel> = {
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
        categories: [ArtifactCategory.FullStack, ArtifactCategory.BackEnd, ArtifactCategory.CyberSecurity]
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
        categories: [ArtifactCategory.BackEnd, ArtifactCategory.FullStack]
    },
    'tactical-pigeon': {
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
        categories: [ArtifactCategory.FullStack, ArtifactCategory.BackEnd, ArtifactCategory.FrontEnd]
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
        categories: [ArtifactCategory.FrontEnd]
    },
    'signalr-chat-app': {
        id: 5,
        name: "SignalR Chat App 🗨️",
        slug: "signalr-chat-app",
        imageUrl: "/assets/mockups/signalr-chat-app.jpg",
        summaryText: "A chat application built with SignalR and .NET Core 7. Users can create chat rooms, join chat rooms, and send messages to each other in real time.",
        technologies: [
            {
                list: [
                    technologies['C#'], technologies['.NET Core'], technologies['Real-Time'], technologies['SignalR'], technologies['Railway'], technologies['Git'], technologies['Event-driven Architecture']
                ],
                shouldMarquee: true
            },
            {
                list: [
                    technologies['HTML'], technologies['TailwindCSS'], technologies['daisyUI'], technologies['Vite'], technologies['React'], technologies['TypeScript'], technologies['JSX'],
                ],
                shouldMarquee: true
            },
        ],
        githubUrl: "https://github.com/iliaamiri/SignalR_Starter",
        demoUrl: "https://signalr-chat.up.railway.app/",
        primaryThemeColor: "#661AE6",
        tailwindClassDetection: "via-[#661AE6]",
        categories: [ArtifactCategory.FullStack, ArtifactCategory.BackEnd]
    },
    'icbc-slot-sniper': {
        id: 7,
        name: "ICBC Slot Sniper 🎯",
        slug: "icbc-slot-sniper",
        imageUrl: "/assets/mockups/icbc-slot-sniper.jpg",
        summaryText: "A web bot that finds the closest time for an ICBC Road Test. It uses Selenium to automate the process of booking an appointment" +
            "all by itself. It can read your inbox and scan the verification code sent by ICBC.",
        technologies: [
            {
                list: [
                    technologies['JavaScript'], technologies['SeleniumUI'], technologies['Docker'], technologies['GitHub'],
                ],
                shouldMarquee: false
            },
            {
                list: [
                    technologies['Firefox'], technologies['Web Scraping'], technologies['CentOS'], technologies['Linux']
                ],
                shouldMarquee: false
            },
        ],
        githubUrl: "https://github.com/iliaamiri/a-web-bot-for-booking-the-closest-possible-appointment-on-ICBC-Driver-Licensing",
        demoUrl: "https://github.com/iliaamiri/a-web-bot-for-booking-the-closest-possible-appointment-on-ICBC-Driver-Licensing",
        primaryThemeColor: "#a91417",
        tailwindClassDetection: "via-[#a91417]",
        categories: [ArtifactCategory.BackEnd]
    },
    jeddit: {
        id: 6,
        name: "Jeddit 🤡",
        slug: "jeddit",
        imageUrl: "/assets/mockups/jeddit.jpg",
        summaryText: "Jeddit is a clone of Reddit. I built this project as a way to learn more about Express.js and JavaScript.",
        technologies: [
            {
                list: [
                    technologies['JavaScript'], technologies['Express.js'], technologies['UI'], technologies['Git'],
                ],
                shouldMarquee: false
            },
            {
                list: [
                    technologies['HTML'], technologies['CSS'], technologies['Bootstrap'], technologies['GitHub']
                ],
                shouldMarquee: false
            },
        ],
        githubUrl: "https://github.com/iliaamiri/Jeddit",
        demoUrl: "https://jeddit.up.railway.app/",
        primaryThemeColor: "#00B4D8",
        tailwindClassDetection: "via-[#00B4D8]",
        categories: [ArtifactCategory.BackEnd, ArtifactCategory.FullStack]
    },
    'pixel-art': {
        id: 7,
        name: "Pixel Art 🎨",
        slug: "pixel-art",
        imageUrl: "/assets/mockups/pixel-art.jpg",
        summaryText: "A website built with Next.js and Prisma. Users can create pixel art and share it with others. It uses Next Auth for " +
            "authentication and authorization. It uses Vercel for hosting and serverless functions.",
        technologies: [
            {
                list: [
                    technologies['JavaScript'], technologies['Next.js'], technologies['Prisma'], technologies['Vercel'],
                    technologies['Serverless Functions'], technologies['MySQL']
                ],
                shouldMarquee: true
            },
            {
                list: [
                    technologies['HTML'], technologies['CSS'], technologies['TailwindCSS'], technologies['JSX'], technologies['GitHub'],
                    technologies['Git'],
                ],
                shouldMarquee: true
            },
        ],
        githubUrl: "https://github.com/iliaamiri/pixel_arts",
        demoUrl: "https://pixel-arts-jade.vercel.app/",
        primaryThemeColor: "#303030",
        tailwindClassDetection: "via-[#303030]",
        categories: [ArtifactCategory.FrontEnd, ArtifactCategory.FullStack, ArtifactCategory.BackEnd]
    },
};

