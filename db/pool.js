const { Pool } = require('pg');

const pool = new Pool({
  user: 'mk',
  host: 'localhost',
  database: 'ka',
  password: '',
  port: '5432',
});

pool.connect((err, pool) => {
  err
    ? console.log('Error acquiring client', err.stack)
    : pool.query('SELECT NOW()')
    .catch(err => console.log(err.stack))
    .then(res => console.log(res.rows))
})

module.exports = { pool };
