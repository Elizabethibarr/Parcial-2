// Ejercicio 1: estudiante
const estudiante = {
    nombre: "Dani",
    edad: 19,
    contacto: {
        email: "rivasibarra680@gmail.com",
        telefono: "74624278"
    },
    materias: ["JavaScript", "Matemáticas II", "Historia", "Física", "Estadística"],
    saludar: function() {
        console.log("Hola, me llamo " + this.nombre + " y llevo la materia " + this.materias[0]);
    }
}

estudiante.saludar();


// Ejercicio 2: tienda
const tienda = {
    nombre: "Supermercado La Esquina",
    producto: {
        alimentos: {
            nombre: "Cartón de leche",
            stock: 8,
            precio: 6.75
        },
        tecnologia: {
            nombre: "iPhone 14",
            stock: 5,
            precio: 999
        }
    }
}

console.log("\nNombre del producto:", tienda.producto.alimentos.nombre);
console.log("Precio del producto:", tienda.producto.tecnologia.precio);
console.log("Cantidad de stock restante:", tienda.producto.tecnologia.stock - 1);