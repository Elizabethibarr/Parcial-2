const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para calcular salario total
function calcularSalarioTotal(salarioBase, horasExtras, valorHora) {
  const pagoHorasExtras = horasExtras * (valorHora * 1.5);
  return salarioBase + pagoHorasExtras;
}

rl.question('Ingrese su salario base: ', (salarioBase) => {
  rl.question('Ingrese el número de horas extras trabajadas: ', (horasExtras) => {
    rl.question('Ingrese el valor de una hora normal: ', (valorHora) => {
      const total = calcularSalarioTotal(
        parseFloat(salarioBase),
        parseFloat(horasExtras),
        parseFloat(valorHora)
      );
      console.log(`Su salario total es: $${total.toFixed(2)}`);
      rl.close();
    });
  });
});
