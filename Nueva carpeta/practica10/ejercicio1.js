const readline = require('readline');

// Crear interfaz para leer datos del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función que devuelve otra función multiplicadora
function crearMultiplicador(base) {
  return function (numero) {
    return base * numero;
  };
}

// Pedimos los valores al usuario
rl.question('Ingrese la base del multiplicador: ', (base) => {
  rl.question('Ingrese el número a multiplicar: ', (numero) => {
    const multiplicar = crearMultiplicador(Number(base));
    const resultado = multiplicar(Number(numero));

    console.log(`El resultado de multiplicar ${numero} por ${base} es: ${resultado}`);

    rl.close();
  });
});