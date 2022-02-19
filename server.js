import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.js";

const app = express();
app.use(userRoute);

mongoose
.connect("mongodb://127.0.0.1:27017/newshope")
.then(() => {
    console.log("connected succesfuly to database");
  
    app.listen(1337, () => {
        console.log("node server started")
    })
})
.catch(() => {
    console.log("Failed to connect to data base")
});

app.get("/", (req, res, next) => {
    res.send(" <p> Hello world </p>");
});