import express from 'express';
import path from 'path';

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*' );
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.set('view engine', 'ejs');
app.set('views', path.join('views'));
app.use(express.static('public'))
app.use('/test/', (req, res, next) => {
  res.status(200).json({message: 'TEEEESTTT !!'});
  next();
});
app.use((req, res, next) => {
  if (req.originalUrl.endsWith('.js')) {
    res.type('module');
  }
  next();
});
app.use('/second/', (req, res, next) => {
  res.render('second', { title: 'Second' });
});
app.use('/', (req, res, next) => {
  res.render('index', { title: 'Acueil' });
});


/*app.use('/file/components/',(req, res, next) => {
  express.static(__dirname + 'public/components/')
  res.set('Content-Type', 'application/javascript');
});*/

export default app;