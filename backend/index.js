const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRouter = require("./routes/productRoter");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.use("/api", productRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(
    "mongodb+srv://xadicahbazmp202:xadicahbazmp202@cluster0.lnkjt.mongodb.net/Shop?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(port, () => {
      console.log(
        `Example app listening on port ${port}, url is http://localhost:${port}`
      );
    });
  });
