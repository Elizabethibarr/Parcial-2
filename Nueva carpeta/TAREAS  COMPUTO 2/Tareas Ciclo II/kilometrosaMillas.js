import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de kilometros?",(kilometros)=>{
    const km=parseFloat(kilometro)
    const millas=km*0.62137;

    console.log(`La cantidadde kilometros es ${km} y convertido a millas seria igual a ${millas}`)
    rl.close()
})