export class Votes extends Client {
    constructor(options: any);
    jsonAPINames: string[];
    listByUser(userID: any): Promise<NodeModule>;
    listByArticle(articleID: any): Promise<NodeModule>;
    show(voteID: any): Promise<NodeModule>;
    createUpVoteForArticle(articleID: any): Promise<NodeModule>;
    createDownVoteForArticle(articleID: any): Promise<NodeModule>;
    createUpVoteForQuestion(questionID: any): Promise<NodeModule>;
    createDownVoteForQuestion(questionID: any): Promise<NodeModule>;
    createUpVoteForAnswer(answerID: any): Promise<NodeModule>;
    createDownVoteForAnswer(answerID: any): Promise<NodeModule>;
    delete(voteID: any): Promise<any>;
}
import { Client } from "../client";
