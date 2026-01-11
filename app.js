const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const adminSetupRouter = require('./Admin/routes/adminSetupRouter');
const userSetupRouter = require('./User/routes/userSetupRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminSetupRouter);
app.use("/user", userSetupRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});

mongoose.connect(process.env.DATABASE_CONNECTION).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {   
    console.error("Error connecting to MongoDB", err);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
