import { CreateQuery } from "mongoose";
import { Client, IClient } from "../models/Client";

export class ClientDA {

  public async createClient({
    name,
    phone,
    address,
  }: CreateQuery<IClient>): Promise<IClient> {
    return Client.create({
      name,
      phone,
      address,
    })
      .then((data: IClient) => {
        console.log(data);

        return data;
      })
      .catch((error: Error) => {
        console.log("error on create", error.message);
        throw error;
      });
  }

  public async getClients() {
    try {
      return Client.find();
    } catch (error) {
      console.log("error on find", error.message);
    }
  }
  public async removeClient(id: any) {
    try {
      return Client.findByIdAndDelete(id);
    } catch (error) {
      console.error(error);
    }
  }

  public async editClient(req: any, res: any) {
    const id = req.params.ClientId;
    const { name, phone, address } = req.body;
    try {
      let client = await Client.findById(id);
      if (!client) {
        return res.status(400).json({ error: "client not found" });
      }
      let newClient = {
        name,
        phone,
        address,
      };
      return await Client.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            ...newClient,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
}
