const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que calcula el precio con descuento
function calcularDescuento(precio, descuento) {
  const rebaja = precio * (descuento / 100);
  return precio - rebaja;
}

rl.question('Ingrese el precio del producto: ', (precio) => {
  rl.question('Ingrese el porcentaje de descuento: ', (descuento) => {
    const precioFinal = calcularDescuento(parseFloat(precio), parseFloat(descuento));
    console.log(`El precio final con descuento es: $${precioFinal.toFixed(2)}`);
    rl.close();
  });
});