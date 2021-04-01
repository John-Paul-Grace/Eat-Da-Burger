const burger = require("./models/burger.js");

burger.update("burger_name", "Cheese Burger", "Holy Chuck", (res) => {
    console.log(`${res.affectedRows} rows affected`)
});

burger.all((res) => {
    console.log(res);
});
