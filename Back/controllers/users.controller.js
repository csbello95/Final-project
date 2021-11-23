import mongoose  from "mongoose";
import db from "../db.js";
import {usersRoutes} from "../routes/index.js";
import { Users } from "../models/index.js";
import bcrypt from "bcrypt";


 export const getAll = (req, res) => {
   console.log("get all!!");
   db.connect();
   //get all users
   Users.find((err, data) => {
     console.log("find...", data);
     if (data.length === 0) res.status(204).send();
     res.status(200).send(data);
   });
 };

 
 export async function login(req, res) {
  db.connect();
  const { email, password } = req.body;
  const user = await Users.findOne({ email });
  if (user) {
    const frontInput = email + password;
    const checkLogin = await bcrypt.compare(frontInput, user.passCrypt);
    if (checkLogin) {
      res.send({ message: "login sucess", auth:true });
    } else {
      res.send({ message: "Wrong Email or password", auth:false });
    }
  } else {
    res.send({ message:"wrong email or password", auth:false});
  }
}


 export const getOneUser = (req, res) => {
  //connect to DB
  db.connect();
  const { email } = req.params;
  Users.findOne({email}, (err, data) => {
    //mongoose.connection.close();
    if (err) res.sendStatus(404);
    res.status(200).json(data);
  });
};

export const create = (req, res) => {
  db.connect();
  const { email, password } = req.body;
  const user = email + password;
  bcrypt.hash(user, 10).then(function (hash) {
    req.body.passCrypt = hash;
    if (req.body) {
      Users.create(req.body, (err, data) => {
        if (err) res.status(500).send(err);
        res.status(201).json(data);
      });
    }
  });
};

export const update = (req, res) => {
  const { id } = req.params;
  const newUser = req.body;
  db.connect();
  Users.findById(id, (err, usuario) => {
    if (err) res.status(500).send(err);
    Users.updateOne(usuario, newUser, (err, value) => {
      if (err) res.status(500).send(err);
      res.status(200).send(value);
    });
  });
};

export const deleteOne = (req, res) => {
  const { id } = req.params;
  db.connect();
  Users.findById(id, (err, data) => {
    if (err) res.status(404).send(err);
    data.remove((err, value) => {
      if (err) res.status(500).send(err);
      res.send(value);
    });
  });
};