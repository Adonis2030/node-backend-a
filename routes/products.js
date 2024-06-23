const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is product route");
  // this gets executed when user visit http://localhost:3000/products
});

router.get("/101", (req, res) => {
  res.send("this is product 101 route");
  // this gets executed when user visit http://localhost:3000/product/101
});

router.get("/102", (req, res) => {
  res.send("this is product 102 route");
  // this gets executed when user visit http://localhost:3000/product/102
});

module.exports = router;
