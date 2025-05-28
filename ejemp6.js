/*
Ejercicio 6:  
Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
edad. Muestra un mensaje personalizado según el caso. 
*/

const prompt=require('prompt-sync' )();

let edad=parseFloat(prompt('Que edad tienes:  ' ));

if (edad<=18) {

    console.log(' Eres menor de edad ');
} else {
    console.log(' Ya eres mayor de edad, tus responsabilidades son grandes ');
}

// concluido