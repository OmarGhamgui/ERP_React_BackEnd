import { Router, Response, Request } from "express";
import { SupplierController } from './../controllers/SupplierController';

export const SupplierRouter = (
  router: Router,
  service: SupplierController
): void => {

  router.post("/suppliers", async (req: Request, res: Response) => {
    try {
      const result = await service.createSupplier({
        name: req.body.name,
        email:req.body.email,
        phone: req.body.phone,
        address: req.body.address,
      });
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(500).json({ 
        errors : err.data
      });
    }
  });

  router.get("/suppliers", async (req:Request,res:Response) => {
    try {
      const result = await service.getSuppliers()
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

  router.delete("/suppliers/:SupplierId", async (req:Request,res:Response) => {
    try {
      const id=req.params.SupplierId
      const result = await service.removeSupplier(id)
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

  router.put("/suppliers/:SupplierId", async (req:Request,res:Response) => {
    try {
      const result = await service.editSupplier(req,res)
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });
};
