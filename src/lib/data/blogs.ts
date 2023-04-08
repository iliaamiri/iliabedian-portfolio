export const blogs = {
    'deploy-dotnet-app-on-railway-with-docker': {
        id: 1,
        title: 'How to Deploy your .NET App on Railway using Docker',
        description: 'In this tutorial, we will be deploying a .NET 7 app on Railway using the Railway CLI and a Dockerfile. We will be using\n' +
            'the .NET 7 SDK to build a minimal API app and then deploy it on Railway.',
        slug: 'deploy-dotnet-app-on-railway-with-docker',
        coverImage: '/assets/blog-covers/deploy-dotnet-on-railway-using-docker.jpg',
        publishedAt: new Date("2023-03-23"),
        timeToRead: 2,
        backgroundColors: 'from-[#5441FF] via-[#7A6BFF] to-[#7A6BFF]',
        shadow: 'shadow-[inset_0px_-70px_50px_-70px_#5441FF]',
        keywords: ['How to deploy .NET app on Railway', 'Deploy .NET on Railway', 'Deploy .NET on Railway using Docker'],
        tags: ['Railway', 'Docker', '.NET']
    },
    'server-side-events-on-nestjs-emitting-events-to-clients': {
        id: 2,
        title: 'Utilize Real-Time NestJS using Server-Sent Events',
        description: 'Have you ever wanted to send real-time updates to your clients without the need for a WebSocket connection? If so, then\n' +
            'Server-Sent Events (SSE) is the perfect solution for you. In this blog, I\'ll show you how to implement this solution in a NestJS application.',
        slug: 'server-side-events-on-nestjs-emitting-events-to-clients',
        coverImage: '/assets/blog-covers/server-side-events-on-nestjs-emitting-events-to-clients.jpg',
        publishedAt: new Date("2023-04-04"),
        timeToRead: 8,
        backgroundColors: 'from-[#860924] via-[#EF1645] to-[#FF5E5E]',
        shadow: 'shadow-[inset_0px_-70px_50px_-30px_#860924]',
        keywords: ['Server-Sent Events', 'SSE', 'Real-Time Communication', 'WebSockets', 'SSE with NestJS'],
        tags: ['NestJS', 'Server-Sent Events', 'Real-Time Communication', 'WebSockets', 'SSE with NestJS']
    }
};
