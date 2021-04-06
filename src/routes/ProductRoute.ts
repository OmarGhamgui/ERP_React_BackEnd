import { Request, Response, Router } from 'express';
import { ProductController } from './../controllers/ProductController';
export const ProductRouter = (
    router: Router,
    service: ProductController
  ): void => {
  
    router.post("/products", async (req: Request , res: Response) => {
      try {
        const result = await service.createProduct({
          name: req.body.name,
          ref: req.body.ref,
          usedArticles: req.body.usedArticles,
        });
        res.status(200).send(result);
      } catch (err) {
        console.log(err);
        res.status(500).json({ 
          errors : err.data
        });
      }
    });
  
    router.get("/products", async (req:Request,res:Response) => {
      try {
        const result = await service.getProducts()
        res.status(200).send(result);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    });
    
    router.get("/products/:ProductId", async (req:Request,res:Response) => {
      try {
        const id=req.params.ProductId;
        const result = await service.getOneProduct(id)
        res.status(200).send(result);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    });

    router.delete("/products/:ProductId", async (req:Request,res:Response) => {
      try {
        const id=req.params.ProductId
        const result = await service.removeProduct(id)
        res.status(200).send(result);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    });
  
    router.put("/products/:ProductId", async (req:Request,res:Response) => {
      try {
        const result = await service.editProduct(req,res)
        res.status(200).send(result);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    });
  };
  