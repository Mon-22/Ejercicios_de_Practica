/*
Ejercicio 1:  
Declara dos variables numéricas numero1 y numero2. Pide al usuario 
que ingrese dos números y muestra cuál es mayor o si son iguales.
*/

const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt('dame el primer numero: '));
let numero2 = parseFloat(prompt(' dame un segundo numero:  '));

// ejecuta la accion 

if  (numero1 > numero2 ) {

    console.log( numero1 +' es mayor  que: ' + numero2  )

} else if ( numero1 == numero2 ){

    console.log( numero1 + ' es igual que: '+ numero2)

} else {

    console.log ( numero2 + ' es mayor que: ' + numero1)
}

// concluido