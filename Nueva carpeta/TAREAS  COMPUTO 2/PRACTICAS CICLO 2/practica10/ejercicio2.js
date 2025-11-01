// Ejercicio 2:
// Función recursiva para calcular el factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Ejemplo de uso:
console.log("\nEjercicio 2:");
console.log("Factorial de 5 =", factorial(5)); // Resultado: 120