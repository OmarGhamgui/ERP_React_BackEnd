import { SupplierDA } from './../DA/SupplierDA';

export class SupplierController {
    constructor(private SupplierDA: SupplierDA) { }
    public async createSupplier(data: any) {
        try {
            const result = await this.SupplierDA.createSupplier(data);
                        return result;
        }
        catch (err) {
            throw err;
        }
    }

    public async getSuppliers() {
        try {
            const result = await this.SupplierDA.getSuppliers();
                        return result;
        }
        catch (err) {
            throw err;
        }
    }

    public async removeSupplier(id:any) {
        try {
            const result = await this.SupplierDA.removeSupplier(id);
                        return result;
        }
        catch (err) {
            throw err;
        }
    }

    public async editSupplier(req:any,res:any) {
        try {
            const result = await this.SupplierDA.editSupplier(req,res);
                        return result;
        }
        catch (err) {
            throw err;
        }
    }
 }
