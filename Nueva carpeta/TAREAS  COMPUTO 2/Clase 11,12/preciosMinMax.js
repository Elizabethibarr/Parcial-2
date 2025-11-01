const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el numero de  la habitacion",(num)=>{
    // convertimos a Number
    let habitacion=Number(num);
    if(habitacion/10){
        // divido entre 10 y rendondeo hacia arriba con Math.ceil
        console.log(`Math.cell(${num})=>${Math.cell(num)}`);
        let piso=Math.cell(habitacion/10);

        console.log(`Lahyabitacion es ${habitacion} esta en el piso ${piso}`);
    }else{
    console.log(" El número de habitación debe ser mayor que 0.")
    }
 rl.close();
});