var nodeMaria = require('node-mariadb');
require('dotenv').config();

console.log(process.env.DB_PASS);

//hs readable configuration.
var connection = nodeMaria.createConnection({
  driverType: nodeMaria.DRIVER_TYPE_HANDLER_SOCKET,
  host:process.env.DB_HOST,
  port:3306,
  user:process.env.DB_USER,
  password:process.env.DB_PASS,
  database:process.env.DB_NAME
});

connection.on('error', function(error){
  console.log('connection error --> ' + error);
  process.exit(1);
});

connection.on('connect', function(){
  console.log('db connected...');
  connection.query('select * from mfuser;')
    .on('result', function(res){
      res.on('row', function(row){
        console.log('result row -->' + row);
      })
    })
    .on('error', function(err){
      console.log('select error -->' + err);
    })
    .on('end', function(info){
      console.log('result finished successfully');
    });
  // connection.openIndex('memfee', 'mfuser', nodeMaria.HandlerSocket.PRIMARY, ['_uid', '_uname', '_uemail']
  // , function(err, hs){
  //   hs.find([1], {limit:1},function(err, data){
  //     console.log(data);
  //   });
  // });
});
