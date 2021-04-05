const burger = require("../models/burger.js");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data
        }

        console.log(hbsObject);

        res.render("index", hbsObject);
    });
});

router.post("/api/add", (req, res) => {
    burger.create(req.body.name, (result) => {
        console.log(`${result.affectedRows} rows affected`);
        res.json(result);
    });
});

router.put("/api/update/:id", ({ body, params }, res) => {
    burger.update(params.id, body.col, body.data, (result) => {
        console.log(`${result.changedRows} rows changed`);
        res.json(result);
    });
});

module.exports = router;
