
//importamos el archivo math para tener las funciones
//y lo almacenamos en una constante
const math = require('./math.js')
//cuando tenemos las funciones en otro archivo ya no podemos hacer esto
//console.log(divide(1,0));
console.log(math.add(1,4));
console.log(math.divide(6,3));
console.log(math.multiply(3,6));
console.log(math.substract(8,3));

/**AHORA LO QUE VAMOS A TRABAJAR SON LOS MÓDULOS QUE VIENEN INSTALADO EN node.js
 * Para poder ver como funcionan... -------TODO ESTE CÓDIGO SE DENOMINA "asíncrono".
 * ESTE MÉTODO QUE TIENE EL MÓDULO fs, crea un archivo de texto, cuando escribimos el método writeFile, este método recibe tres parámetros, uno el nombre del archivo que queremos crear, dos el contenido del archivo, y por último, una función "callback" que si hay error al crear un archivo en este caso lo va a mostrar por consola.
 */
const fs = require('fs');
/*fs.writeFile('./texto.txt', 'linea uno de texto con módulos de terceros', function(err){
    if(err){
        console.log(err);
    }
    console.log('Se ha creado el archivo de texto de manera correcta')
} )
*/
//el código de arriba está comentado para ejemplificar otro método de fs

fs.readFile('./texto.txt', function(err, data) {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})