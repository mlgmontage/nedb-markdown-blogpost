const datastore = require("nedb-promise");
const DB = datastore({
  filename: "../db/database.json",
  autoload: true,
});

module.exports = DB;
