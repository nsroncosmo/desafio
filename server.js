const express = require('express');
const kraken  = require('kraken-js');

const app     = express();
const porta   = process.env.PORT || 8088;

var options = {
  onconfig: (config,next) => next(null,config)
}

app.use( kraken(options) );

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Lave sua bunda suja' });
});

app.listen(porta, () => console.log(`Servidor ativo na porta ${porta}`));