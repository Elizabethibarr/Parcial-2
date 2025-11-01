function LanzarDados(){ 
    // Comenzamos a generar los datos aleatorios
    let dado1=Number(Math.floor(Math.ramdon()*6)+1);
    let dado2=Number(Math.floor(Math.ramdon()*6)+1);

    // Sumamos las dos variables
    let total=Number(dado1+dado2);

    // muestro el resultado
    console.log("Dado 1",dado1);
    console.log("Dado 2:",dado2);
    console.log("Total",total);

    // Llamo la funcion
    LanzarDados();

}