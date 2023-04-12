import http from 'http';
import app from './app.js';
import open from 'open';

const port = 5000,
  hostname = '127.0.0.1',
  server = http.createServer(app),
  env = process.env.NODE_ENV;

server.listen(port, hostname, ()=> {
  console.log('*** SERVER ON ***');
  console.log(`Server from ${hostname} listen on ${port}`);
  if(env === 'development') {
    open(`http://${hostname}:${port}`)
  }
});
