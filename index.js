const Express    = require('express');
const expressHBS = require('express-handlebars');
const morgan     = require('morgan');

const server = new Express();


server.use(morgan('combined', { stream: { write: logger.info } }));

server.engine('hbs', expressHBS({
  extname:       '.hbs',
  partialsDir:   server.get('views'),
  defaultLayout: false
}));
server.set('view engine', 'hbs');

server.get('/', function(req, res) {
  res.sendStatus(200);
})


module.exports = server;

