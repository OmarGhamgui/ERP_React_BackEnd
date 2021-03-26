
import { ArticleDA } from './../DA/ArticleDA';
export class ArticleController {
    constructor(private articleDA: ArticleDA) { }
    public async createArticle(data: any) {
        try {
            const result = await this.articleDA.createArticle(data);
                        return result;
        }
        catch (err) {
            throw err;
        }
    }

    public async getArticles() {
        try {
            const result = await this.articleDA.getArticles();
                        return result;
        }
        catch (err) {
            throw err;
        }
    }

    public async removeArticle(id:any) {
        try {
            const result = await this.articleDA.removeArticle(id);
                        return result;
        }
        catch (err) {
            throw err;
        }
    }

    public async editArticle(req:any,res:any) {
        try {
            const result = await this.articleDA.editArticle(req,res);
                        return result;
        }
        catch (err) {
            throw err;
        }
    }
 }
