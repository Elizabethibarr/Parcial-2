const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que ordena las letras alfabéticamente
function ordenarCadena(cadena) {
  return cadena.split('').sort().join('');
}

rl.question('Ingrese una palabra o frase: ', (texto) => {
  const resultado = ordenarCadena(texto);
  console.log(`La cadena ordenada alfabéticamente es: ${resultado}`);
  rl.close();
});