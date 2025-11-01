let mensaje = "El sistema encontró un error en la base de datos.";
let posicion = mensaje.indexOf("error");

if (posicion !== -1) {
  console.log(`La palabra "error" aparece en la posición: ${posicion}`);
} else {
  console.log("La palabra 'error' no aparece en el mensaje.");
}
