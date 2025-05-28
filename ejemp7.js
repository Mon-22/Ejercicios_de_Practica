/*
Ejercicio 7:  
Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
kg a libras, Pista: 2.20462) kg x 2.20462
*/

const prompt = require('prompt-sync')();

let pesoK=parseFloat(prompt(' Escribe tu peso en kilos '));

let pesoL = pesoK * 2.20462 ;

console.log (' tu peso en libras es: '+ pesoL);
