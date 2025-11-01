const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let litros = [];

console.log("=== PROMEDIO DE CONSUMO DE COMBUSTIBLE ===");

rl.question("Litros consumidos en el primer viaje: ", (v1) => {
  litros.push(parseFloat(v1));

  rl.question("Litros consumidos en el segundo viaje: ", (v2) => {
    litros.push(parseFloat(v2));

    rl.question("Litros consumidos en el tercer viaje: ", (v3) => {
      litros.push(parseFloat(v3));

      let promedio = (litros[0] + litros[1] + litros[2]) / 3;

      console.log("\n=== RESULTADO ===");
      console.log(`Viaje 1: ${litros[0]} litros`);
      console.log(`Viaje 2: ${litros[1]} litros`);
      console.log(`Viaje 3: ${litros[2]} litros`);
      console.log(`Promedio de consumo: ${promedio.toFixed(2)} litros`);

      rl.close();
    });
  });
});
