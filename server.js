const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
var routes = require('./api/routing');

// RUTAS
app.use('/api', routes);


app.listen(3000, function(){
	console.log('Servidor escuchando en puerto 3000');
});