/*
Ejercicio 5: 
Escribe un programa que pida al usuario que ingrese tres números y 
determine cuál es el mayor de los tres.
*/

const prompt = require('prompt-sync')();

console.log(' vamor a comparar tres numeros, y determinaremos cual es mayor. ')
let numeroUno=parseFloat(prompt(' Escribe el primer numero: ')); 
let numeroDos=parseFloat(prompt(' Escribe el segundo numero: '));
let numeroTres=parseFloat(prompt(' Escribe el tercer y ultimo numero: '));


if (numeroUno > numeroDos && numeroUno>numeroTres ){
    
    console.log(' El numero mayor es:   '+ numeroUno)
}

else if(numeroDos>numeroUno && numeroDos>numeroTres) {
    
    console.log('El numero mayor es:  '+numeroDos)

}

else if (numeroTres >numeroUno && numeroTres>numeroDos) {

    console.log('El numero mayor es:  '+numeroTres)
}
else {
    console.log(' no hay opcion')
}

    
// concluido
