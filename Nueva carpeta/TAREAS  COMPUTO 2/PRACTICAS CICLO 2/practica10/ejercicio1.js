// Ejercicio 1:
// Función que crea un multiplicador
function crearMultiplicador(base) {
    return function(numero) {
        return base * numero;
    };
}

// Ejemplo de uso:
const multiplicarPor3 = crearMultiplicador(3);
console.log("Ejercicio 1:");
console.log("3 x 5 =", multiplicarPor3(5)); // Resultado: 15