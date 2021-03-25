import { ClientDA } from './../DA/ClientDA';

export class ClientController {
    constructor(private clientDA: ClientDA) { }
    public async createClient(data: any) {
        try {
            const result = await this.clientDA.createClient(data);
                        return result;
        }
        catch (err) {
            throw err;
        }
    }

    public async getClients() {
        try {
            const result = await this.clientDA.getClients();
                        return result;
        }
        catch (err) {
            throw err;
        }
    }

    public async removeClient(id:any) {
        try {
            const result = await this.clientDA.removeClient(id);
                        return result;
        }
        catch (err) {
            throw err;
        }
    }

    public async editArticle(req:any,res:any) {
        try {
            const result = await this.clientDA.editClient(req,res);
                        return result;
        }
        catch (err) {
            throw err;
        }
    }
 }
