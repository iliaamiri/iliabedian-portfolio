export interface BlogModel {
    id: number;
    title: string;
    slug: string;
    coverImage: string;
    description: string;
    publishedAt: Date;
    timeToRead: number;
    tags: string[];
}