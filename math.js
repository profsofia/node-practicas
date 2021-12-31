const Math ={};
function add (num1, num2){
    return num1+num2;
}
function substract(num1, num2){
    return num1-num2;
}
function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    if (num2==0){
        return "No se puede dividir por cero";
    } else{
        return num1/num2;
    }
}
/*exportamos las funciones y cuando lo hacemos se transforman en un objeto.
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
---creamos un objeto para que quede mas claro-----()en la primer linea....
*/
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;
// Y SOLO EXPORTAMOS EL OBJETO MATH, CON SUS PROPIEDADES
module.exports = Math;
