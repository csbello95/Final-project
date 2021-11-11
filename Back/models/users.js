import mongoose from "mongoose";


const schema = {
  email: String,
  phone_number: Number,
  password: String,
  admin: Boolean,
};

const Users = mongoose.model("Users", schema, "Users");

export default Users;
