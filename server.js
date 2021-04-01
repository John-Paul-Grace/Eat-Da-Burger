const orm = require("./config/orm.js");

orm.updateOne("burgers", "burger_name", "Cheese Burger", "Jucy Lucy", (result) => {
    console.log(`${result.affectedRows} rows affected`);
});

orm.selectAll("burgers", (result) => {
    console.log(result);
});
