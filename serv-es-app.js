import http from 'http';
import app from './app.js';

const port = 5007,
  hostname = '127.0.0.7',
  server = http.createServer(app);
server.listen(port, hostname, ()=> {
  console.log('*** SERVER ON ***');
  console.log(`Server from ${hostname} listen on ${port}`);
});
