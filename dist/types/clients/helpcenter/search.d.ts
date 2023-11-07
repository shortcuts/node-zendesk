export class Search extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    searchArticles(searchString: any): Promise<NodeModule>;
    searchArticlesInLocale(searchString: any, locale: any): Promise<NodeModule>;
    searchArticlesByLabels(labelNames: any): Promise<NodeModule>;
    searchQuestions(searchString: any): Promise<NodeModule>;
}
import { Client } from "../client";
