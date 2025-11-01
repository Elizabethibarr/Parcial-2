const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let productos = [];

console.log("=== CÁLCULO DE COMPRA CON IVA ===");

rl.question("Ingrese el precio del primer producto: ", (p1) => {
  productos.push(parseFloat(p1));

  rl.question("Ingrese el precio del segundo producto: ", (p2) => {
    productos.push(parseFloat(p2));

    rl.question("Ingrese el precio del tercer producto: ", (p3) => {
      productos.push(parseFloat(p3));

      let subtotal = productos[0] + productos[1] + productos[2];
      let iva = subtotal * 0.13;
      let total = subtotal + iva;

      console.log("\n=== RESULTADO ===");
      console.log(`Subtotal: $${subtotal.toFixed(2)}`);
      console.log(`IVA (13%): $${iva.toFixed(2)}`);
      console.log(`Total a pagar: $${total.toFixed(2)}`);

      rl.close();
    });
  });
});