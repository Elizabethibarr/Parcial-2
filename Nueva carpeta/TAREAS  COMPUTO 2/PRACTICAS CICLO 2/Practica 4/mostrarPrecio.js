// definimos una funcion que reciba un numero y un codigo de moneda
function formatearPrecio(valor,codigoMoneda){

    // Usamos Intl.numbertFormat para dar formato con simbolo de moneda y decimales
    const formato=new Intl.NumberFormat(`es-ES`,{
        style:`currency`,
        currency:codigoMoneda,
        minimumFractionDigits:2,
    });
}
// retornamos el  valor formateado
return formato.format(valor);

// mostrando resultados en consola
console.log(formatearPrecio(1234567.89,"USD")); 
console.log(formatearPrecio(98765.43,"EUR"));  