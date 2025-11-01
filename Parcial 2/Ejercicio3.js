const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para sumar tres precios
function sumarPrecios(p1, p2, p3) {
  return p1 + p2 + p3;
}

rl.question('Ingrese el precio del primer producto: ', (p1) => {
  rl.question('Ingrese el precio del segundo producto: ', (p2) => {
    rl.question('Ingrese el precio del tercer producto: ', (p3) => {
      const total = sumarPrecios(parseFloat(p1), parseFloat(p2), parseFloat(p3));
      console.log(`La suma total de los precios es: $${total.toFixed(2)}`);
      rl.close();
    });
  });
});