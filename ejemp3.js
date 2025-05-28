/*
Ejercicio 3: 
Declara dos variables booleanas condicion1 y condicion2. Pide al 
usuario que ingrese dos valores booleanos (true o false) y muestra el 
resultado de diversas combinaciones lógicas.
*/


const prompt = require('prompt-sync')();


let condicion=prompt (' dame un valor (true o false): ')=== "true";


// resultados 
if (condicion=true){
console.log("\n", "true && true = true");
console.log("\n", "true && false = false");
console.log("\n", "false && true = false");
console.log("\n", "false && false = false");

}else {
console.log("\n", "true || true = true");
console.log("\n", "true || false = true");
console.log("\n", "false || true = true");
console.log("\n", "false || false = true");

}


// monica esto esta todo mal, atte monica
