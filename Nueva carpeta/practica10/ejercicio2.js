const readline = require('readline');

// Crear interfaz para leer datos del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función recursiva para calcular el factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Solicitar número al usuario
rl.question('Ingrese un número para calcular su factorial: ', (num) => {
  const numero = Number(num);

  if (isNaN(numero) || numero < 0) {
    console.log('Por favor ingrese un número entero positivo.');
  } else {
    const resultado = factorial(numero);
    console.log(`El factorial de ${numero} es: ${resultado}`);
  }

  rl.close();
});