const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secretOrKey } = require("../../config");
const User = require("../../database/models/User");

/*
a cute function 

function refineBody(req) {
  try {
    const body = req.body;
    const refinedBody = {};
    for (let property in req.body) {
      refinedBody[property] = body[property];
    }
    return refinedBody;
  } catch (e) {
    console.log(e);
  }
}
*/

router.post("/register", async (req, res) => {
  try {
    let { userName, email, password } = req.body;
    password = await bcrypt.hash(password, 12);
    const result = await User.create({
      userName,
      password,
      email
    });
    res.json(result);
  } catch (e) {
    res.json(e);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { password, userName } = req.body;
    const user = await User.findOne({ userName });
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      //Createing jwt payload to put in token
      const payload = { id: user.id, userName: user.userName };
      //Sign Token
      jwt.sign(payload, secretOrKey, { expiresIn: 3500 }, (err, token) => {
        res.json({
          success: true,
          token: "Bearer " + token,
          userName: user.userName,
          status: user.status
        });
      });
    }
  } catch (e) {}
});

module.exports = router;
