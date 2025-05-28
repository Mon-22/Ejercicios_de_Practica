/*
Ejercicio 9:  
Define una constante PI con el valor de pi (3.14159). Pide al usuario 
que ingrese el radio de un círculo y calcula su área y perímetro 
utilizando la constante PI. 

Perímetro = pi por diámetro.
Área = pi por radio al cuadrado.

*/
const prompt = require ('prompt-sync')();

const PI = 3.1416;

let calcula = parseFloat(prompt('Elije la opcion que deseas calcular: (1) Area, (2) Perímetro,  escriba el numero de la opcion deseada:   ')); 

if (calcula === 1) {

    let radio1 = parseFloat(prompt(' escribe el radio de tu ciruculo: ') ) // el diametro de un ciculo es el doble de su radio
    let area = (PI*radio1)^2
    console.log(' El area de tu circulo es:  '+area )
}
else if (calcula === 2) {

    let radio2 = parseFloat(prompt(' escribe el radio de tu ciruculo: ') )
    let diametro= radio2/2;
    let perimetro = (PI*diametro);
    console.log ('El Perímetro de tu circulo es:  '+perimetro)

}
else{
    console.log('Opcion no existe, aqui solo calculamos area y perimetro de circulos. ')
}

// concluido

