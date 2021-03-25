import mongoose, { Schema,Document} from "mongoose";

// interface

 export interface IUniversity extends Document {
   name: any;
   city: any
 
}

// mongoose model

const UniversitySchema: Schema = new Schema({
  name: { type: String, required: true },
  city:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "City"
  }
});

const University =  mongoose.model<IUniversity>("University", UniversitySchema);

export default University;