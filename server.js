  const express     = require( 'express' );
  const bodyParser  = require( 'body-parser' );
  const { doDaMap } = require( './utils/utils' );
//const kraken      = require( 'kraken-js' );

  const server      = express();
  const port        = process.env.PORT || 8088;

server.use( bodyParser.urlencoded({ extended: true }) );

//let mapaInit;

//var options = {
//  onconfig: (config,next) => next(null,config)
//}
//server.use( kraken(options) );

// curl -X GET localhost:3000/api/test
server.get( '/api/test', (req, res) => {
  res.send({ message: 'To funfundo' });
});


// curl -X POST localhost:3000/api/map -d "w=10&h=10&a=3&c=4"
server.post( '/api/map', (req, res) => {
  const { w: cols, h: rows, a: ports, c: clouds } = req.body;

  res.json( createMap( cols, rows, ports, clouds ) );
});

/*
// curl -X POST localhost:3000/api/map -d "w=10&h=10&a=3&c=4"
server.post( '/api/map', (req, res) => {
  const { w: cols, h: rows, a: ports, c: clouds } = req.body;

  mapaInit = createMap( cols, rows, ports, clouds );

  //console.log('%c Mservering', 'color: green; font-weight: bold');
  console.table( { cols, rows, ports, clouds } );

  res.json( mapaInit );
});

server.post( '/api/calc', (req, res) => {
  const {d: day} = req.body;
  const mapaRes  = updateMap( mapaInit, day );

  console.log(`%c After ${day} days}`, 'color: green; font-weight: bold');

  res.json( mapaRes );
});
*/

server.listen( port, () => console.log( `Servidor ativo na porta ${port}`) );