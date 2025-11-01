// definir una función que reciba una fecha en formato YYYY-MM-DD
function validarFecha(fecha){

    // verificamos que cumpla con el formato correcto usando expresión regular
    const regex=/^\d{4}-\d{2}-\d{2}$/;

    if(!regex.test(fecha)){
        console.log("Formato de fecha inválido");
        return;
    }

    // separamos año, mes y día
    const [anio,mes,dia]=fecha.split("-").map(Number);

    // validamos que el mes esté entre 1 y 12
    if(mes<1||mes>12){
        console.log("Mes inválido");
        return;
    }

    // definimos los días máximos por mes (considerando año bisiesto)
    const diasPorMes=[31,(anio%4===0&&anio%100!==0)||(anio%400===0)?29:28,
                      31,30,31,30,31,31,30,31,30,31];

    // validamos que el día esté dentro del rango correcto
    if(dia<1||dia>diasPorMes[mes-1]){
        console.log("Día inválido");
        return;
    }

    // si pasa todas las validaciones, convertimos la fecha a timestamp
    const timestamp=Date.parse(fecha);
    console.log(`Fecha válida: ${fecha}, Timestamp: ${timestamp}`);
}

// ejemplos de uso
validarFecha("2025-09-11"); 
validarFecha("2025-13-10"); 
validarFecha("2025-02-30"); 