 limpiar = () => {
    document.getElementById('formulario').reset();
}

sumar = ()=>{
    var num1 = parseInt(document.getElementById('valor1').value);
    var num2 = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = num1 + num2;
}

restar = ()=>{
    var num1 = parseInt(document.getElementById('valor1').value);
    var num2 = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = num1 - num2;
}

multiplicar = ()=>{
    var num1 = parseInt(document.getElementById('valor1').value);
    var num2 = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = (num1 * num2).toFixed();
}

dividir = ()=>{
    var num1 = parseInt(document.getElementById('valor1').value);
    var num2 = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = (num1 / num2).toFixed(3);
}

