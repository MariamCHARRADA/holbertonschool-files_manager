import express from "express";
import router from "./routes/index.mjs";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const port = process.env.PORT || 5000;

app.use("/", router);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
