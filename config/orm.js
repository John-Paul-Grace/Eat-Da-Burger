const connection = require("./connection.js");

const orm = {
    selectAll(tableInput, cb) {
        const queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },
    insertOne(tableInput, columns, data, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";

        connection.query(queryString, [tableInput, columns, data], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },
    updateOne(tableInput, id, col, data, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE id = ? LIMIT 1";

        connection.query(queryString, [tableInput, col, data, id], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    }
};

module.exports = orm;
