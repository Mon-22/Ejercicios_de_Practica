/*
Ejercicio 10:  
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
semana correspondiente. Si el número no está dentro de ese rango, 
muestra un mensaje de error.
*/

const prompt=require ('prompt-sync')();

let lunes = 1
let martes = 2
let miercoles = 3
let jueves = 4
let viernes = 5
let sabado = 6
let domingo = 7

let dia = prompt(' dame un numero : '); 

if (dia == 1 ){
    console.log ('Este numero representa el lunes ')
} 
else if ( dia == 2) {
    console.log (' Este numero representa los martes ')
}
else if ( dia == 3) {
    console.log ('Este numero representa los miercoles ')
}
else if ( dia == 4) {
    console.log ('Este numero representa los jueves ')
}
else if ( dia == 5){
    console.log (' Este numero representa los maravillos viernes ')
}
else if (dia == 6){
    console.log (' Este numero representa los sabados ')
}
else if ( dia == 7){
    console.log (' Sste dia representa los domingos ')
}
else {
console.log (' esta fuera de rango, ese dia no existe ')
}

// concluido