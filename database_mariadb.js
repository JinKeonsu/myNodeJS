var nodeMaria = require('node-mariadb');
var config = require('dotenv').config();

//hs readable configuration.
var connection = nodeMaria.createConnection({
  driverType: nodeMaria.DRIVER_TYPE_HANDLER_SOCKET,
  host:config.env.DB_HOST,
  port:3306,
  user:config.env.DB_USER,
  password:config.env.DB_PASS,
  database:config.env.DB_NAME
});
