// Imports necessary files and libraries
const burger = require("../models/burger.js");
const express = require("express");
const router = express.Router();

// Api GET route
router.get("/", (req, res) => {
    // Calls the burger.all() function from the burger model
    burger.all((data) => {
        // Creates an object to be used by handlebars
        const hbsObject = {
            burgers: data
        }

        // Logs the handlebars object on the server side
        console.log(hbsObject);

        // Renders index.handlebars using the handlebars object
        res.render("index", hbsObject);
    });
});

// Api CREATE route
router.post("/api/add", (req, res) => {
    // Calls the burger.create() function from the burger model
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
