const connection = require("./connection.js");

const orm = {
    selectAll(tableInput, cb) {
        const queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },
    insertOne(columns, data, tableInput, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";

        connection.query(queryString, [tableInput, columns, data], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },
    updateOne() {}
};

module.exports = orm;
