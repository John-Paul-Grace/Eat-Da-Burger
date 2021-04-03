const burger = require("../models/burger.js");

const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.send("IT WORKS!");
});

router.post("", (req,res) => {
    
});

router.put("", (req,res) => {
    
});

module.exports = router;
