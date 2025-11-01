function obtenerNombres(personas) {
    return personas.map(p => p.nombre);
}

const lista = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 25 },
    { nombre: "Marta", edad: 30 }
];

console.log(obtenerNombres(lista));