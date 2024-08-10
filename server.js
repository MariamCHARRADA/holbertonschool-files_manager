import express from "express";
import router from "./routes/index.mjs";
import bodyParser from "body-parser";

const express = require("express");

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
