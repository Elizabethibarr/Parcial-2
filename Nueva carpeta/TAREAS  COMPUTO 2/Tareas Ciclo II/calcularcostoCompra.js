import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el precio unitario del producto: ", (precioUnitario) => {
    rl.question("Ingrese la cantidad de productos que quiere comprar: ", (cantidadProductos) => {
        const pu = parseFloat(precioUnitario);
        const cp = parseInt(cantidadProductos);
        const costoTotal = pu * cp;

        console.log(`\n💲 El precio unitario es $${pu.toFixed(2)}, la cantidad de productos es ${cp}, y el precio total es $${costoTotal.toFixed(2)}.`);

        rl.close();
    });
});