import {default as express, urlencoded, json}from "express";
import logger from "morgan";
import { connect } from "mongoose";
import compression from "compression";
import path from "path";
//import router from "./routes/index.js";


const PORT = process.env.PORT ||3000

if(process.env.NODE_ENV === "production"){
  use(express(__dirname + "/public"))
}


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Budgetary";

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(urlencoded({ extended: true }));
if (process.env.NODE_ENV ==="production"){
  use(express(__dirname + "/public"))
}
app.use(json());

app.set(("./public"));

connect(MONGODB_URI , {
  useNewUrlParser: true,
  
});

// routes

app.get('/*', async(request, result)=> {
  result.sendFile(path.join(__dirname, "public", "index.html"), function(error){
    if(error){
      result.status(500).json(error)
    }
  })
})


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});