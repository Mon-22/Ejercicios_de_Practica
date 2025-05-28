/*
Ejercicio 8:  
Pide al usuario que ingrese las longitudes de los tres lados de un 
triángulo. Determina y muestra si el triángulo es equilátero, isósceles o 
escaleno. (Investiga sobre los triángulos para determinar la formula)
equilátero, 3 lados iguales 
isósceles, 2 lados iguales , uno desigual  
escaleno, 3 lados diferenes.

*/
const prompt = require ('prompt-sync')();

let ladoA = parseFloat(prompt(' cuanto mide el lado A del triangulo: ')); 
let ladoB = parseFloat(prompt(' cuanto mide el lado B del triangulo: ')); 
let ladoC = parseFloat(prompt(' cuanto mide el lado C del triangulo: '));

if ( ladoA===ladoB && ladoB=== ladoC) {

    console.log('Felicidades, tienes un triangulo equilátero ');
}

else if (ladoA===ladoB && ladoB!= ladoC || ladoA!= ladoB && ladoB === ladoC) {

    console.log( ' Felicidades has encontrado un triangulo isósceles');

} else {
console.log (' imgino que lo debes tener es un triangulo escaleno, con sus tres lados diferentes ');
}