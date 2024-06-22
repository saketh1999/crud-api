import express from "express";
import mongoose from "mongoose";
import { Product } from "./Models/product.model.js";
import { router } from "./routes/product.routes.js";

const app = express();

//Middleware
app.use(express.json());
// app.use(express.urlencoded({extended:false}));

app.use('/api/products',router)


app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
  });
  
//Connecting to the DB:
mongoose
  .connect(
    //"" //=> Use the mongoDB String
  )
  .then(() => {
    console.log("DB Connected");
    app.listen(3000);
    
  })
  .catch(() => console.log("Connection Failed"));
