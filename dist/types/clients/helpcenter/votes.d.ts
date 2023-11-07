export class Votes extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    listByUser(userID: any): Promise<{
        response: any;
        result: any;
    }>;
    listByArticle(articleID: any): Promise<{
        response: any;
        result: any;
    }>;
    show(voteID: any): Promise<{
        response: any;
        result: any;
    }>;
    createUpVoteForArticle(articleID: any): Promise<{
        response: any;
        result: any;
    }>;
    createDownVoteForArticle(articleID: any): Promise<{
        response: any;
        result: any;
    }>;
    createUpVoteForQuestion(questionID: any): Promise<{
        response: any;
        result: any;
    }>;
    createDownVoteForQuestion(questionID: any): Promise<{
        response: any;
        result: any;
    }>;
    createUpVoteForAnswer(answerID: any): Promise<{
        response: any;
        result: any;
    }>;
    createDownVoteForAnswer(answerID: any): Promise<{
        response: any;
        result: any;
    }>;
    delete(voteID: any): Promise<any>;
}
import { Client } from "../client";
