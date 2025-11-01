console.log("\n\n\n.::Ejercicio de contar caracteres::");

const cadena = " Su nombre ";

// 1. Eliminar espacios al inicio y final
const cadenaLimpia = cadena.trim();
console.log("Cadena limpia:", cadenaLimpia);

// 2. Eliminar todos los espacios internos
const cadenaSinEspacios = cadenaLimpia.replace(/ /g, "");
console.log("Cadena sin espacios:", cadenaSinEspacios);

// 3. Contar los caracteres restantes
const cantidadCaracteres = cadenaSinEspacios.length;
console.log("Cantidad de caracteres (sin contar espacios):", cantidadCaracteres);