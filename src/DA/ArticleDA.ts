import { CreateQuery } from "mongoose";
import { Article, IArticle } from "../models/Article";

export class ArticleDA {

  public async createArticle({
    name,
    ref,
    category,
  }: CreateQuery<IArticle>): Promise<IArticle> {
    return Article.create({
      name,
      ref,
      category,
    })
      .then((data: IArticle) => {
        console.log(data);

        return data;
      })
      .catch((error: Error) => {
        console.log("error on create", error.message);
        throw error;
      });
  }

  public async getArticles() {
    try {
      return Article.find();
    } catch (error) {
      console.log("error on find", error.message);
    }
  }
  public async removeArticle(id: any) {
    try {
      return Article.findByIdAndDelete(id);
    } catch (error) {
      console.error(error);
    }
  }

  public async editArticle(req: any, res: any) {
    const id = req.params.ArticleId;
    const { name, ref, category } = req.body;
    try {
      let article = await Article.findById(id);
      if (!article) {
        return res.status(400).json({ error: "article not found" });
      }
      let newArticle = {
        name,
        ref,
        category,
      };
      return await Article.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            ...newArticle,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
}
