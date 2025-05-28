/*
Ejercicio 3: 
Declara dos variables booleanas condicion1 y condicion2. Pide al 
usuario que ingrese dos valores booleanos (true o false) y muestra el 
resultado de diversas combinaciones lógicas.
*/


const prompt = require('prompt-sync')();

let condicion1=parseBoolean(prompt (' dame un valor verdadero o falso: '));
let condicion2=parseBoolean(prompt (' dame otro valor , verdaderi o falso: '));

if (condicion1===falso){
    console.log(' falso, verdadero; verdadero,verdadero; falso, falso; verdadero falso')

} else if ( condicion1 === verdadero ){
    console.log (' verdadero, falso; verdadero,verdadero; falso, falso; falso,verdadedor')

}else if ( condicion2===falso){
    console.log (' falso, verdadero; verdadero,verdadero; falso, falso; verdadero falso' )

}
else if (condicion2===falso){
    console.log (' verdadero, falso; verdadero,verdadero; falso, falso; falso,verdadedor')
}
else {
console.log ('fin');
}
// monica esto esta todo mal, atte monica
