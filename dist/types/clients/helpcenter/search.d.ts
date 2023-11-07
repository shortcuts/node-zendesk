export class Search extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    searchArticles(searchString: any): Promise<{
        response: any;
        result: any;
    }>;
    searchArticlesInLocale(searchString: any, locale: any): Promise<{
        response: any;
        result: any;
    }>;
    searchArticlesByLabels(labelNames: any): Promise<{
        response: any;
        result: any;
    }>;
    searchQuestions(searchString: any): Promise<{
        response: any;
        result: any;
    }>;
}
import { Client } from "../client";
