import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = {
  email: String,
  name: String,
  phone: Number,
  from: Date,
  to: Date,
  rental_value: Number,
  id_car: Schema.Types.ObjectId,
};

const Rentals = mongoose.model("Rentals", schema,"Rentals");

export default Rentals;
