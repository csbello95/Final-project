import mongoose from "mongoose";

const db = {
  connect: function () {
    mongoose.connect("mongodb://localhost:27017/api_car_rentals", {
    //mongoose.connect("mongodb+srv://cbello95:Catalina95*@cluster0.6uqoh.mongodb.net/test",{  
    useNewUrlParser: true,
    });
    mongoose.connection.on("error", function (e) {
      console.error(e);
    });
  },
};

export default db;