export {};

// CASO 1: error semantico detectado por TypeScript.
{
  function sumar(a: number, b: number): number {
    return a + b;
  }

  sumar(10, "5");
  // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
}

// CASO 6: error de asignacion.
{
  let x: number = 42;

  x = "hola";
  // Error: Type 'string' is not assignable to type 'number'.
}

// CASO 7: propiedad inexistente.
{
  interface Gato {
    nombre: string;
  }

  const g: Gato = { nombre: "Felix" };

  g.edad;
  // Error: Property 'edad' does not exist on type 'Gato'.
}

// CASO 11: implicit any.
{
  function procesar(x) {
    return x;
  }

  console.log(procesar("dato"));
  // En strict debe mostrar error de implicit any.
}

// CASO 17 y CASO 20: TypeScript exige coherencia frente a la coercion de JavaScript.
{
  function sumar(a: number, b: number) {
    return a + b;
  }

  sumar(10, "5");
  // TS: error estatico si la intencion esta tipada.
}
