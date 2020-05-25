require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const mongoose = require("mongoose");

//ROUTES
const authRoute = require("./routes/auth");
const brandRoute = require("./routes/brand");
const woodRoute = require("./routes/wood");
const productRoute = require("./routes/product");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/users", authRoute);
app.use("/api/products", brandRoute);
app.use("/api/products", woodRoute);
app.use("/api/products", productRoute);

app.use((error, req, res, next) => {
  let status = error.statusCode || 500;
  let message =
    error.statusCode === "500"
      ? "There is something wrong with server"
      : error.message;
  res.status(status).json({ error, message });
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    app.listen(3005, () => {
      console.log(`DB Connected successfully`);
    });
  })
  .catch(err => {
    console.log(err.message);
  });
