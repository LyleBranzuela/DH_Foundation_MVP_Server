// Load modules
const mysql = require("mysql");

// Initialize pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "54.66.121.53",
  user: "dh_foundation_mvp",
  password: "dh_foundation",
  database: "dh_foundation_db",
  debug: false,
});

module.exports = pool;
