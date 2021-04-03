const burger = require("../models/burger.js");

const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data
        }

        console.log(hbsObject);

        res.json(hbsObject);
    });
});

router.post("", (req,res) => {
    
});

router.put("", (req,res) => {
    
});

module.exports = router;
