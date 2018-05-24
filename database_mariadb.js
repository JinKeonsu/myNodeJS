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
  console.log(error);
  process.exit(1);
});

connection.on('connect', function(){
  connection.openIndex('memfee', 'mfuser', nodeMaria.HandlerSocket.PRIMARY, ['_uid', '_uname', '_uemail']
  , function(err, hs){
    hs.find([1], {limit:1},function(err, data){
      console.log(data);
    });
  });
});
