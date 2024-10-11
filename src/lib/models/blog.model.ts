export interface BlogModel {
  title: string;
  description: string;
  slug: string;
  publishedAt: Date;
  timeToRead: number;
  backgroundColors: string;
  placeholderColors: string[];
  shadow: string;
  keywords: string[];
  tags: string[];
}
