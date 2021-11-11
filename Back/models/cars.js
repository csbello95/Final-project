import mongoose from "mongoose";


const schema = {
    car_brand:String,
    car_model:String,
    number_doors:Number,
    number_bags:Number,
    image:String,
    scale:String,
    rental_value:Number
};

const Cars = mongoose.model("cars", schema);

export default Cars;