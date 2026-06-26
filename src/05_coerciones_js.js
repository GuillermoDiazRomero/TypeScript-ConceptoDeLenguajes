// CASO 16: coerciones implicitas de JavaScript.
console.log("CASO 16 - 10 + \"5\":", 10 + "5");
// "105": el operador + concatena cuando aparece un string.

console.log("CASO 16 - \"5\" * 2:", "5" * 2);
// 10: el operador * fuerza conversion numerica.

// CASO 20: comparacion JS vs TS.
console.log("CASO 20 - JS permite:", 10 + "5");
// JS: "105".
// TS: si la intencion esta tipada como number, sumar(10, "5") da error estatico.
