import readline from `readline`;

const rl= readline.createInterface({
    input:Process.stind,
    output:process.stdout
});
// Lista de precios
let precios=[30,52,35,1,12,-3];
rl.question("Presione ENTER para mostrar el precio mas barato y el mas caro",()=>{
    // Buscaremos precio minimo y maximo
    let precioMin=Math.min(...precios);
    let precioMax = Math.max(...precios)

    // los convertimos a Number
    precioMin=Number(precioMin)
    precioMax=Number(precioMax)

    console.log(`El precio mas barato es: ${precioMin}`);
    console.log(`El precio mas caro es: ${precioMax}`);
rl.close();
});