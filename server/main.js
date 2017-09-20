/*
PARA WEB
*/
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080,function(){
	console.log("Servidor corriendo en http://localhost:8080");
});

app.use(express.static('public'));
/*app.get('/',function(req,res){
	res.status(200).send("HOLA");
});
*/

//Server Web Socket
io.on('connection',function(socket){
	console.log('Alguien se ha conectado con Socket');

	socket.on('set-service',function(data){
		console.log("service",data);
	});

	/*socket.emit('messages',{
		'name': 'Victor Recines'
	});*/
});

/*
PARA .NET
*/
var servernet = require("net").createServer();

servernet.listen(8081,function(){
	console.log("Servidor corriendo en http://localhost:8081");
});

servernet.on("connection", function(socket){
	console.log('Alguien se ha conectado con netserver');
});
