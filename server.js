const orm = require("./config/orm.js");

orm.selectAll("burgers", (result) => {
    console.log(result);
});
