import { Source } from "./source";

export class Article {
    public source: Source;
    public author: string;
    public title: string;
    public description: string;
    public urlToImage: string;
    public publishedAt: string;
    public content: string | null;
}