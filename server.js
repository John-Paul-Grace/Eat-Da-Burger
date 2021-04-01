const orm = require("./config/orm.js");

orm.insertOne("burger_name", "Jucy Lucy", "burgers", (result) => {
    console.log(`${result.affectedRows} rows affected`);
});

orm.selectAll("burgers", (result) => {
    console.log(result);
});
