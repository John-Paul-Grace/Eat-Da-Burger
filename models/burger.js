// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
  all(cb) {
    orm.selectAll('burgers', (res) => cb(res));
  },
  create(name, cb) {
    orm.insertOne('burgers', 'burger_name', name, (res) => cb(res));
  },
  update(id, col, data, cb) {
    orm.updateOne('burgers', id, col, data, (res) => cb(res));
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
