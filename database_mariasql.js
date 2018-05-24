var client = require('mariasql');
require('dotenv').config();

var conn = new client({
  host:process.env.DB_HOST,
  port:3306,
  user:process.env.DB_USER,
  password:process.env.DB_PASS,
  db:process.env.DB_NAME
});

var query = conn.query("SELECT * FROM mfuser");
query.on('result', function(res) {
  res.on('data', function(row) {
    console.log(row);
  }).on('end', function() {
    console.log('Result set finished');
  });
}).on('end', function() {
  console.log('No more result sets!');
});

conn.end();
