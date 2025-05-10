const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Happyface1",
    host: "locolhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;