/*
Ejercicio 4:  
Declara una variable nombre y pide al usuario que ingrese su nombre. 
Verifica si el nombre ingresado es igual a tu nombre. 
*/

const prompt = require('prompt-sync')();

let nombre = 'Monica' ; // agregar comillas cuando se declara string

let nombre2 = prompt(' cual es tu nombre: '); // olvide agregar prompt 

if (nombre == nombre2 ) {

    console.log(' chocala, nos llamamos igual ');// console.log no lleva signo igual 

} 
else {

    console.log(' nuestro nombre es distinto ');
}

// concluido