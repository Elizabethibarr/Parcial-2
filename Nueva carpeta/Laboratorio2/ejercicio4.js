const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let datos = [];

console.log("=== CÁLCULO DE SALARIO FINAL ===");

rl.question("Ingrese el sueldo base: ", (sueldo) => {
  datos.push(parseFloat(sueldo));

  rl.question("Ingrese el bono: ", (bono) => {
    datos.push(parseFloat(bono));

    rl.question("Ingrese el descuento por seguro: ", (descuento) => {
      datos.push(parseFloat(descuento));

      let salarioFinal = datos[0] + datos[1] - datos[2];

      console.log("\n=== RESULTADO ===");
      console.log(`Sueldo base: $${datos[0].toFixed(2)}`);
      console.log(`Bono: $${datos[1].toFixed(2)}`);
      console.log(`Descuento por seguro: $${datos[2].toFixed(2)}`);
      console.log(`Salario final: $${salarioFinal.toFixed(2)}`);

      rl.close();
    });
  });
});
