const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/user.model");

// router.post("/login", /*async func*/)

// router.post("/messages", /*async func*/)

router.post("Hello",(req,res)=>{
    res.send('Hello Manish👋')
})

module.exports = router;