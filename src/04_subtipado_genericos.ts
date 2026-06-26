export {};

// CASO 2: tipado estructural.
// Dos interfaces distintas son compatibles si tienen la misma estructura.
{
  interface Persona {
    nombre: string;
    edad: number;
  }

  interface Usuario {
    nombre: string;
    edad: number;
  }

  const p: Persona = { nombre: "Ana", edad: 20 };
  const u: Usuario = p; // valido por estructura

  console.log("CASO 2:", u);
}

// CASO 5: modelo de dominio con genericos.
{
  type Usuario = {
    id: number;
    nombre: string;
    email: string;
  };

  type ApiResponse<T> =
    | { estado: "ok"; datos: T }
    | { estado: "error"; mensaje: string };

  const r: ApiResponse<Usuario> = {
    estado: "ok",
    datos: { id: 1, nombre: "Ana", email: "ana@mail.com" }
  };

  console.log("CASO 5:", r);
}

// CASO 14: subtipado estructural.
// Perro puede usarse como Animal porque tiene al menos la propiedad nombre.
{
  interface Animal {
    nombre: string;
  }

  interface Perro {
    nombre: string;
    ladra(): void;
  }

  const firulais: Perro = {
    nombre: "Firulais",
    ladra() {
      console.log("guau");
    }
  };

  const a: Animal = firulais;

  console.log("CASO 14:", a.nombre);
}

// CASO 15: polimorfismo parametrico.
function primero<T>(xs: T[]): T {
  return xs[0];
}

console.log("CASO 15 number:", primero<number>([1, 2, 3]));
console.log("CASO 15 string:", primero<string>(["a", "b"]));
