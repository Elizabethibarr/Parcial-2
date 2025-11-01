const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese su nombre completo: ", (nombre) => {
  // Elimina espacios al inicio y al final
  let nombreLimpio = nombre.trim();
  // Quita todos los espacios dentro para contar caracteres
  let caracteresSinEspacios = nombreLimpio.replace(/\s+/g, "").length;

  console.log("Nombre sin espacios al inicio o final: " + nombreLimpio);
  console.log("Cantidad de caracteres (sin espacios): " + caracteresSinEspacios);

  rl.close();
});