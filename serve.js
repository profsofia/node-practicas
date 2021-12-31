/**Despues de lo que hicimos abajo, (crear el servidor)
 * instalamos un paquete de node a través del comando npm, luego nos creó la carpeta node_modules y los package para indicar que se instaló y desde donde lo hizo... vamos a probarlo..
 */
const colors = require('colors');
/*
const http = require('http');
*este módulo permite crear un servidor
-----req: request (petición)
-----res: response (respuesta)
http.createServer(function(req, res){
vamos a escribir una cabecera
 res.writeHead(200, {'Content-Type': 'text/html'});
 la linea anterior, 200 significa que todo estubo OK
 res.write(`<h1>Hola mundo, te saludo desde node.js</h1>`);
 res.end();
}).listen(1993, function(){
    console.log('server on port 1993'.rainbow);
});
con esto creado nos vamos al navegador! y Voilá!

COMO ES UN CÓDIGO QUE NO SE ACTUALIZA SI YO HAGO MODIFICACIONES, PARA CANCELARLO Y VOLVER A REINICIAR EL SERVIDOR, APRETAMOS  CTRL C DOS VECES.... 
*/

/**
 * AHORA QUE YA SABEMOS ESTO, vamos a trabajar con el frameworks de node para crear servidores: "express", ya lo instalamos con npm i express
 */
const express = require('express');
const server = express();

server.get('/', function (req, res) {
    res.send(`<h1>Hola nuevamente, estamos de regreso con express</h1>`);
    res.end();
})

server.listen(3000, function () {
    console.log('listen on port 3000'.rainbow);
})