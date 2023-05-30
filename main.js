// Creamos la funcion para donde obtendremos la variable
const diccionario = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}
function obtenerVariable() {
    const texto = document.getElementById('texto').value;
    const palabras = texto.split(' ');
    let resultado = [];

    for(let palabra of palabras) {
        let palabraCifrada = '';
        for(let letra of palabra) {
            if(diccionario[letra]) {
                palabraCifrada += diccionario[letra];
            } else {
                palabraCifrada += letra;
            }
        }
        resultado.push(palabraCifrada);
    }

    const textoCifrado = resultado.join(' ');

    return document.getElementById('respuesta').value = textoCifrado;
}

// Función de descifrado
function descifrar() {
    let textoCifrado = document.getElementById('texto').value;
    let textoDescifrado = textoCifrado;
    
    for (let letra in diccionario) {
        const re = new RegExp(diccionario[letra], 'g');
        textoDescifrado = textoDescifrado.replace(re, letra);
    }
    
    return document.getElementById('respuesta').value = textoDescifrado;
}

function copiarAlPortapapeles() {
    const copiarTexto = document.getElementById('respuesta').value;
    try {
        navigator.clipboard.writeText(copiarTexto);
        document.getElementById('respuesta').value = '';
        alert('copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar texto: ', err);
    }
}