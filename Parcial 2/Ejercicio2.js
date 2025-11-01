const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que cuenta los caracteres
function contarCaracteres(texto) {
  return texto.length;
}

rl.question('Ingrese una palabra o frase: ', (texto) => {
  const cantidad = contarCaracteres(texto);
  console.log(`La cantidad de caracteres es: ${cantidad}`);
  rl.close();
});