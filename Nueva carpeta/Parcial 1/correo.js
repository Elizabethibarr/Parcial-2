const nombre = "Daniela Elizabeth Ibarra Rivas"; 
let usuario = nombre.replace(/ /g, "").toLowerCase().slice(0,5);
console.log("Nombre completo: " + nombre);
console.log("Usuario generado: " + usuario); 
console.log("Correo generado: " + usuario + "@gmail.com");