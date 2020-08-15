
var cluster = require('cluster');
const app = require('./app');

const port = process.env.PORT || 8080;

var numCPUs = require('os').cpus().length; //4
 //console.log('processors ', numCPUs);

if (cluster.isMaster) {
  // Fork workers.n
  
  for (var i = 0; i < numCPUs ; i++) {
    cluster.fork();//creating server instance
  }

  
} 
else {
	//child process

  app.listen(port, () =>{
    console.log('Products microservice running on port %s', port);
  });
 
}