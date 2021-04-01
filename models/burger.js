// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
  all(cb) {
    orm.selectAll('burgers', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, (res) => cb(res));
  },
  update(column, oldData, newData, cb) {
    orm.updateOne('burgers', column, oldData, newData, (res) => cb(res));
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
