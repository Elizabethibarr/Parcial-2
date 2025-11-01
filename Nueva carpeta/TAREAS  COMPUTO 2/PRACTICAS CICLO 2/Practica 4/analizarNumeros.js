// defenimos la funcion que reciba un -parrafo con numeros meclados
function analizamosNumeros(parrafo){
    // Usamos expresion regular para encontar todos los numeros
    const numerosEncontrados=parrafo.match(/\d+/g)
    // si no  encuentra numeros mostrara el siguiente mensaje
    if(!numerosEncontrados){
        console.log("No se encontro numeros en ell texto");
        return;
    }
    
  //convertimos los valores encontrados a enteros
  const numeros= numerosEncontrados.map(num=>parseInt(num));

    //  sumamos todos los numeros
    const suma=numeros.reduce((acc,val)=>acc+val,0);
    
    // calculamos el promedio
    const promedio=suma/numeros.length;
    
    // contamos cuantos numeros son mayores que el promedio
    const mayores=numeros.filter(num=>num>promedio).length;

    // mostrando resultado enconsola
    console.log(`Texto: "${parrafo}"`);
    console.log(`Numeros extraidos: "${numeros}`);
    HTMLFormControlsCollection.log(`Promedio: ${promedio.toFixed(2)}`);

    console.log(`Cantidad mayores al promedio: ${mayores}`);
}

// ejemplo de uso
analizarNumeros("En la caja había 10 manzanas, 20 peras y 30 naranjas.");
