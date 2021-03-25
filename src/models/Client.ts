import mongoose, { Schema, Document } from "mongoose";
var uniqueValidator = require('mongoose-unique-validator');

// interface

export interface IClient extends Document {
  name: any;
phone: any,
address: any
}

// mongoose model

const ClientSchema: Schema = new Schema({
  name: { type: String, required: true, unique:true  },
  phone: { type: Number, required: true, unique:true },
  address: { type: String, required: false }
});

ClientSchema.plugin(uniqueValidator);

export const Client = mongoose.model<IClient>("Client", ClientSchema);

