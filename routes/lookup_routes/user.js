const express = require("express");
const router = express.Router();
const db = require("../db");

const validData = (reqbody) => {
  return reqbody.first_name;
};

router.get("/", async (req, res) => {
  let data = {};
  res.json(data);
});

/* Register a User */
router.post("/", async (req, res) => {
  if (!validData(req.body)) {
    res.status(400).send("Invalid Data");
  } else {
    try {
      res.json(req.body);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
});

module.exports = router;
