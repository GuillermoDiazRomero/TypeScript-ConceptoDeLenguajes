export {};

// CASO 10: inferencia.
let nombre = "TypeScript"; // string
let version = 5; // number

function duplicar(n: number) {
  return n * 2; // retorno inferido: number
}

const mixto = [1, "dos"];
// Inferido como (string | number)[].

console.log("CASO 10:", nombre, version, duplicar(4), mixto);

// CASO 12: variable sin informacion suficiente.
let resultado;

resultado = 10;
console.log("CASO 12 - numero:", resultado);

resultado = "hola";
console.log("CASO 12 - string:", resultado);
// Al no anotar el tipo, queda demasiado flexible.

// CASO 13: array vacio.
const vacio = [];

vacio.push("hola");
vacio.push(123);

console.log("CASO 13:", vacio);
// Con strict, TypeScript permite que el array evolucione segun los valores agregados.
