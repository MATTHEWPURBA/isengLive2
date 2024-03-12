const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "shoestore",
  password: "Robherto82",
  port: 5432,
  idleTimeoutMillis: 2000,
});

module.exports = pool;