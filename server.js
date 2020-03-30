const express       = require( 'express' );
const bodyParser    = require( 'body-parser' );
const { createMap } = require( './utils/utils' );
//const kraken        = require( 'kraken-js' );

const app  = express();
const port = process.env.PORT || 8088;

app.use( bodyParser.urlencoded({ extended: true }) );

let mapaInit;

//var options = {
//  onconfig: (config,next) => next(null,config)
//}

//app.use( kraken(options) );

app.get('/api/test', (req, res) => {
  res.send({
     express: 'To funfundo',
     req: req,
     });
});

app.post('/api/map', (req, res) => {
  const {r: rows, c: cols, s: sat} = req.body;

  mapaInit = createMap( cols, rows, sat );

  console.log('%c Mapping', 'color: green; font-weight: bold');
  console.table({cols, rows, sat});

  res.json( mapaInit );
//  console.table(mapaInit);
});

app.post('/api/calc', (req, res) => {
  const {d: day} = req.body;
  const mapaRes  = updateMap( mapaInit, day );

  console.log(`%c After ${day} days}`, 'color: green; font-weight: bold');
//  console.table(mapaRes);

  res.json( mapaRes );
});

app.listen(port, () => console.log( `Servidor ativo na porta ${port}`) );