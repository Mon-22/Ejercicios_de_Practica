/*
Ejercicio 5: 
Escribe un programa que pida al usuario que ingrese tres números y 
determine cuál es el mayor de los tres.
*/

const prompt = require('prompt-sync')();

console.log(' vamor a comparar tres numeros, y determinaremos cual es mayor. ')
let numeroUno= parseFloat(prompt(' escribe el primer numero: ')); 
let numeroDos=parseFloat(prompt(' Escribe el segundo numero: '));
let numeroTres=parseFloat(prompt(' Escribe el tercer y ultimo numero: '));

let elMayor= (numeroUno || numeroDos||numeroTres );


    console.log (' el numero mayor es: '+ elMayor)

    
