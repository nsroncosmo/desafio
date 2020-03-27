const express = require('express');
//const kraken  = require('kraken-js');

const app     = express();
const port    = process.env.PORT || 8088;

//var options = {
//  onconfig: (config,next) => next(null,config)
//}

//app.use( kraken(options) );

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'To funfundo' });
});

 app.listen(port, () => console.log(`Servidor ativo na port ${port}`));