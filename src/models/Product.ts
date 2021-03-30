import mongoose, { Schema, Document } from "mongoose";
// import { Article, IArticle } from './Article';

var uniqueValidator = require('mongoose-unique-validator');

// interface

export interface IProduct extends Document {
  name: any;
  ref: any,
articles:any}

// mongoose model

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true, unique:true  },
  ref: { type: String, required: true, unique:true },
  articles: { type: Array, required: false },
});

ProductSchema.plugin(uniqueValidator);

export const Product = mongoose.model<IProduct>("Product", ProductSchema);

