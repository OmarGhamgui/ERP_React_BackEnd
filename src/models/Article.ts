import mongoose, { Schema, Document } from "mongoose";
var uniqueValidator = require('mongoose-unique-validator');

// interface

export interface IArticle extends Document {
  name: any;
ref: any,
category: any
}

// mongoose model

const ArticleSchema: Schema = new Schema({
  name: { type: String, required: true, unique:true  },
  ref: { type: String, required: true, unique:true },
  category: { type: String, required: false },
});

ArticleSchema.plugin(uniqueValidator);

export const Article = mongoose.model<IArticle>("Article", ArticleSchema);

