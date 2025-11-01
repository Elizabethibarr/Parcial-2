import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la primera nota",(nota1)=>{ 
    rl.question("Ingrese la segundad nota",(nota2)=>{
    rl.question("Ingrese la tercera nota",(nota3)=>{
    const n1=parseFloat(nota1)
    const n2=parseFloat(nota2)
    const n3=parseFloat(nota3)
    const notaFinal=n1+n2+n3
    const promedio=notaFinal/3

    console.log(`Sus notas son ${num1}, ${num2}, ${num3} el promedio es igual a: ${promedio}`)
    console.log
}) 
})
   
})