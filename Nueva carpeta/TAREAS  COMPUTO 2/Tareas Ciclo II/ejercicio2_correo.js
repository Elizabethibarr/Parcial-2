const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese su correo electrónico: ", (correo) => {
  let correoNormalizado = correo.toLowerCase();
  let esGmail = correoNormalizado.endsWith("@gmail.com");

  console.log("Correo normalizado: " + correoNormalizado);
  if (esGmail) {
    console.log("✅ El correo pertenece a Gmail.");
  } else {
    console.log("❌ El correo no es de Gmail.");
  }

  rl.close();
});
