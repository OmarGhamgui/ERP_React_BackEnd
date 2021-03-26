import { Request, Response, Router } from 'express';
import { ArticleController } from '../controllers';
export const ArticleRouter = (
    router: Router,
    service: ArticleController
  ): void => {
  
    router.post("/articles", async (req: Request , res: Response) => {
      try {
        const result = await service.createArticle({
          name: req.body.name,
          ref: req.body.ref,
          category: req.body.category,
        });
        res.status(200).send(result);
      } catch (err) {
        console.log(err);
        res.status(500).json({ 
          errors : err.data
        });
      }
    });
  
    router.get("/articles", async (req:Request,res:Response) => {
      try {
        const result = await service.getArticles()
        res.status(200).send(result);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    });
  
    router.delete("/article/:ArticleId", async (req:Request,res:Response) => {
      try {
        const id=req.params.ArticleId
        const result = await service.removeArticle(id)
        res.status(200).send(result);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    });
  
    router.put("/articles/:ArticleId", async (req:Request,res:Response) => {
      try {
        const result = await service.editArticle(req,res)
        res.status(200).send(result);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    });
  };
  