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

  public async editClient(data:any) {
    try {
      const {name,phone,address} = data
      let client = await Client.findById(data._id);
      if (!client) {
     return "client not found"
      }
      let newClient = {
      name,
      phone,
      address,
      };
      return await Client.findByIdAndUpdate(
        { _id: data._id },
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
