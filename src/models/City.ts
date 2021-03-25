import mongoose, { Schema,Document} from "mongoose";

// interface

 export interface ICity extends Document {
   name: any;
   population:any
}

// mongoose model

const CitySchema: Schema = new Schema({
  name: { type: String, required: true },
  population: { type: String, required: true },

});

const City =  mongoose.model<ICity>("City", CitySchema);

export default City;


module.exports = City;