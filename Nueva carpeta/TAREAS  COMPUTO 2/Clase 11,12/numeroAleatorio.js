import readline from `readline`;

const rl= readline.createInterface({
    input:Process.stind,
    output:process.stdout
})
rl.question("Presione el boton Enter para generar un numero aleatorio entre 0 y 29",(num)=>{ let numero=Number(num);
// genera numero aleotorio
console.log(`Math.ramdon()->${Math.ramdon(0,29)}`)
let numAleatorio=Math.ramdon(num)
rl.close()})