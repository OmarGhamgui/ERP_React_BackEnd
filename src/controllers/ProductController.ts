
import { ProductDA } from './../DA/ProductDA';

export class ProductController {
    constructor(private productDA: ProductDA) { }
    public async createProduct(data: any) {
        try {
            const result = await this.productDA.createProduct(data);
                        return result;
        }
        catch (err) {
            throw err;
        }
    }

    public async getProducts() {
        try {
            const result = await this.productDA.getProducts();
                        return result;
        }
        catch (err) {
            throw err;
        }
    }

    public async getOneProduct(id:any) {
        try {
            const result = await this.productDA.getOneProduct(id);
                        return result;
        }
        catch (err) {
            throw err;
        }
    }

    public async removeProduct(id:any) {
        try {
            const result = await this.productDA.removeProduct(id);
                        return result;
        }
        catch (err) {
            throw err;
        }
    }

    public async editProduct(req:any,res:any) {
        try {
            const result = await this.productDA.editProduct(req,res);
                        return result;
        }
        catch (err) {
            throw err;
        }
    }
 }
