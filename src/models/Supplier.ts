import mongoose, { Schema, Document } from "mongoose";
var uniqueValidator = require('mongoose-unique-validator');

// interface

export interface ISupplier extends Document {
  name: any;
  email:any,
phone: any,
address: any
}

// mongoose model

const SupplierSchema: Schema = new Schema({
  name: { type: String, required: true, unique:true  },
  email:{type:String,required:true,unique:true},
  phone: { type: Number, required: true, unique:true },
  address: { type: String, required: false }
});

SupplierSchema.plugin(uniqueValidator);

export const Supplier = mongoose.model<ISupplier>("Supplier", SupplierSchema);

