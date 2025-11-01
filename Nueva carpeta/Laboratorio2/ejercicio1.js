const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let gastos = [];

console.log("=== CÁLCULO DE GASTOS DEL MES ===");

rl.question("Ingrese el primer gasto del mes: ", (g1) => {
  gastos.push(parseFloat(g1));

  rl.question("Ingrese el segundo gasto del mes: ", (g2) => {
    gastos.push(parseFloat(g2));

    rl.question("Ingrese el tercer gasto del mes: ", (g3) => {
      gastos.push(parseFloat(g3));

      let total = gastos[0] + gastos[1] + gastos[2];

      console.log("\n=== RESULTADO ===");
      console.log(`Gasto 1: $${gastos[0].toFixed(2)}`);
      console.log(`Gasto 2: $${gastos[1].toFixed(2)}`);
      console.log(`Gasto 3: $${gastos[2].toFixed(2)}`);
      console.log(`Total gastado: $${total.toFixed(2)}`);

      rl.close();
    });
  });
});