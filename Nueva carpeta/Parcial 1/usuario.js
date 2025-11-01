const frase = "El usuario ingresó correctamente"; 
let pos = frase.toLowerCase().indexOf("usuario");

console.log("Frase: " + frase);
if (pos >= 0) {
  console.log("La palabra 'usuario' aparece en la posición: " + pos);
} else {
  console.log("No se encontró la palabra usuario.");
}