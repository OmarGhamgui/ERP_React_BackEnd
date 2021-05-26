import { Router, Response, Request } from "express";
import { ClientController } from './../controllers/ClientController';

export const ClientRouter = (
  router: Router,
  service: ClientController
): void => {
   
  router.post("/clients", async (req: Request, res: Response) => {
    try {
      const result = await service.createClient({
        name: req.body.name,
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
  
  router.get("/clients", async (req:Request,res:Response) => {
    try {
      const result = await service.getClients()
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });
                             
  router.delete("/clients/:ClientId", async (req:Request,res:Response) => {
    try {
      const id=req.params.ClientId;
      const result = await service.removeClient(id);
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

  router.put("/clients/:ClientId", async (req:Request,res:Response) => {
    const id = req.params.ClientId
    try {
      const result = await service.editClient(
        {
        _id:id,
        name:req.body.name,
        phone:req.body.phone,
        address:req.body.address
      }
      )
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });
};
