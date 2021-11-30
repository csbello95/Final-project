import mongoose  from "mongoose";
import db from "../db.js";
import { Cars } from "../models/index.js";

export const getAll = (req, res) => {
    console.log("get all!!");
    db.connect();
    //get all users
    Cars.find((err, data) => {
      //console.log("find...", data);
      if (data.length === 0) res.status(204);
      res.status(200).send(data);
    });
  };
 
  export const getOne = (req, res) => {
    //connect to DB
    db.connect();
    const { id } = req.params;
    Cars.findById(id, (err, data) => {
      //mongoose.connection.close();
      if (err) res.sendStatus(404);
      res.status(200).json(data);
    });
  };

  export const create = (req, res) => {
    db.connect();
    if (req.body) {
      Cars.create(req.body, (err,data)=>{
        if (err) res.status(500).send(err);
        res.status(201).json(data);
      
      })
    }
  };
  
  export const update = (req, res) => {
    const { id } = req.params;
    const newCar = req.body;
    db.connect();
    Cars.findById(id, (err, data) => {
      if (err) res.status(500).send(err);
      res.status(200).send(newCar);
      Cars.updateOne(data, newCar, (err, value) => {
        if (err) res.status(500).send(err);
        //res.status(200).send(value);
      });
    });
  };


  export const deleteOne = (req, res) => {
    const { id } = req.params;
    db.connect();
    Cars.findById(id, (err, data) => {
      if (err) res.status(404).send(err);
      data.remove((err, value) => {
        if (err) res.status(500).send(err);
        res.send(value);
      });
    });
  };
  
  
