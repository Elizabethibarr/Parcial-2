const texto = "Hola mundo, esto es una prueba"; 
let nuevoTexto = texto
  .replace(/a/gi,"@")
  .replace(/e/gi,"#")
  .replace(/i/gi,"$")
  .replace(/o/gi,"%")
  .replace(/u/gi,"&");

console.log("Texto original: " + texto);
console.log("Texto convertido: " + nuevoTexto);