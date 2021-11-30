import mongoose  from "mongoose";
import db from "../db.js";
import { Rentals } from "../models/index.js";

export const getAllRentals = (req, res) => {
    console.log("get all!!");
    db.connect();
    //get all rentals
    Rentals.find((err, data) => {
      if (data.length === 0) res.status(204).send();
      res.status(200).send(data);
    });
  };
 
  export const getOneRentals = (req, res) => {
    //connect to DB
    db.connect();
    const { id } = req.params;
    Rentals.findById(id, (err, data) => {
      //mongoose.connection.close();
      if (err) res.sendStatus(404);
      res.status(200).json(data);
    });
  };

  export const createRentals = (req, res) => {
    db.connect();
    if (req.body) {
      Rentals.create(req.body, (err,data)=>{
        if (err) res.status(500).send(err);
        res.status(201).json(data);
      
      })
    }
  };
  

  export const updateRentals = (req, res) => {
    const { id } = req.params;
    const newRentals = req.body;
    db.connect();
    Rentals.findById(id, (err, data) => {
      if (err) res.status(500).send(err);
      res.status(200).send(newRentals);
      Rentals.updateOne(data, newRentals, (err, value) => {
        if (err) res.status(500).send(err);
        //res.status(200).send(value);
      });
    });
  };


  export const deleteOneRental = (req, res) => {
    const { id } = req.params;
    db.connect();
    Rentals.findById(id, (err, data) => {
      if (err) res.status(404).send(err);
      data.remove((err, value) => {
        if (err) res.status(500).send(err);
        res.send(value);
      });
    });
  };
  