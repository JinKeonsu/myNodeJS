var nodeMaria = require('node-mariadb');

//hs readable configuration.
var connection = nodeMaria.createConnection({
  driverType: nodeMaria.DRIVER_TYPE_HANDLER_SOCKET,
  host:'localhost',
  port:9998
});
