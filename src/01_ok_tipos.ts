export {};

// CASO 3: tipo producto.
// Un Usuario combina varios campos en un solo valor.
type Usuario = {
  id: number;
  nombre: string;
  email: string;
};

const usuario: Usuario = {
  id: 1,
  nombre: "Ana",
  email: "ana@mail.com"
};

// CASO 4: tipo suma.
// El estado solo puede ser uno de estos literales.
type EstadoPedido =
  | "pendiente"
  | "pagado"
  | "enviado"
  | "cancelado";

const estado: EstadoPedido = "pagado";

function describirPedido(valor: EstadoPedido): string {
  switch (valor) {
    case "pendiente":
      return "El pedido todavia no fue pagado.";
    case "pagado":
      return "El pedido fue pagado.";
    case "enviado":
      return "El pedido esta en camino.";
    case "cancelado":
      return "El pedido fue cancelado.";
  }
}

console.log("CASO 3 - usuario:", usuario);
console.log("CASO 4 - estado:", estado, "-", describirPedido(estado));
