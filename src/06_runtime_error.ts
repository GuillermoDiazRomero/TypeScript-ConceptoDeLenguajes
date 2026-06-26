export {};

// CASO 8: dato externo con any.
// TypeScript no lo detecta si data es any, pero puede fallar en runtime.
{
  const data: any = {
    campo: null
  };

  try {
    console.log(data.campo.inexistente);
  } catch (error) {
    console.error("CASO 8 - error de runtime con any:", error);
  }
}

// CASO 9: error logico no detectado.
// El tipo esta bien, pero la logica esta mal: deberia devolver el mayor.
function max(a: number, b: number): number {
  return a + b;
}

console.log("CASO 9 - max(10, 5):", max(10, 5));

// CASO 18: escape con as.
// TypeScript confia en la asercion, pero en runtime sigue siendo string.
{
  const valor = "123" as unknown as number;

  console.log("CASO 18 - valor:", valor);
  console.log("CASO 18 - typeof:", typeof valor);
}

// CASO 19: runtime error con JSON mal tipado.
// JSON.parse devuelve any; la asercion no valida los datos reales.
{
  type UsuarioApi = { nombre: string };

  const data = JSON.parse('{ "nombre": 123 }') as UsuarioApi;

  console.log(data.nombre.toUpperCase());
  // TypeError en ejecucion: data.nombre no es un string.
}
