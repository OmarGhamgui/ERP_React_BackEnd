import { IProduct, Product } from './../models/Product';
import { CreateQuery } from 'mongoose';

export class ProductDA {

    public async createProduct({
      name,
      ref,
      articles,
    }: CreateQuery<IProduct>): Promise<IProduct> {
      return Product.create({
        name,
        ref,
        articles,
      })
        .then((data: IProduct) => {
          console.log(data);
  
          return data;
        })
        .catch((error: Error) => {
          console.log("error on create", error.message);
          throw error;
        });
    }

    public async getProducts() {
      try {
        return Product.find();
      } catch (error) {
        console.log("error on find", error.message);
      }
    }
    
    public async getOneProduct(id:any) {
      try {
        return Product.findById(id);
      } catch (error) {
        console.log("error on find", error.message);
      }
    }

    public async removeProduct(id: any) {
      try {
        return Product.findByIdAndDelete(id);
      } catch (error) {
        console.error(error);
      }
    }

    public async editProduct(req: any, res: any) {
      const id = req.params.ProductId;
      const { name, ref, articles } = req.body;
      try {
        let article = await Product.findById(id);
        if (!article) {
          return res.status(400).json({ error: "product not found" });
        }
        let newProduct = {
          name,
          ref,
          articles,
        };
        return await Product.findByIdAndUpdate(
          { _id: id },
          {
            $set: {
              ...newProduct,
            },
          }
        );
      } catch (error) {
        console.error(error);
      }
    }
  }