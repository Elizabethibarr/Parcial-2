// ejercicio dos: Calculadora con funciones
function sumar(a,b){
    return a+b
}

function restar(a,b){
    return a-b
}

function division(a,b){
    if(b==0){
        return "INstax error"
    }
    return a/b
}

function multiplicar(a,b){
    return a*b
}


function calcular(operacion,x,y){
    const resultado=operacion(x,y)
    console.log('El resultado de la operacion : ',x ,'',operacion,'',y,'es:', resultado)
}

calcular(sumar,5,10)
calcular(multiplicar,5,8)
