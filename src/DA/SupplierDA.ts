import { CreateQuery } from "mongoose";
import { Supplier } from "../models/Supplier";
import { ISupplier } from './../models/Supplier';

export class SupplierDA {

  public async createSupplier({
    name,
    email,
    phone,
    address,
  }: CreateQuery<ISupplier>): Promise<ISupplier> {
    return Supplier.create({
      name,
      email,
      phone,
      address,
    })
      .then((data: ISupplier) => {
        console.log(data);

        return data;
      })
      .catch((error: Error) => {
        console.log("error on create", error.message);
        throw error;
      });
  }

  public async getSuppliers() {
    try {
      return Supplier.find();
    } catch (error) {
      console.log("error on find", error.message);
    }
  }
  public async removeSupplier(id: any) {
    try {
      return Supplier.findByIdAndDelete(id);
    } catch (error) {
      console.error(error);
    }
  }

  public async editSupplier(req: any, res: any) {
    const id = req.params.SupplierId;
    const { name,email, phone, address } = req.body;
    try {
      let supplier = await Supplier.findById(id);
      if (!supplier) {
        return res.status(400).json({ error: "client not found" });
      }
      let newSupplier = {
        name,
        email,
        phone,
        address,
      };
      return await Supplier.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            ...newSupplier,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
}
