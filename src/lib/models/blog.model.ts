export interface BlogModel {
    id: number;
    title: string;
    slug: string;
    coverImage: string;
    publishedAt: Date;
    timeToRead: number;
    backgroundColors: string;
    shadow: string;
    tags: string[];
}
