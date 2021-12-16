function visualizar(numeros, letras) {
    var tabla_numeros = ""
    var tabla_letras = ""
    for (let i = 0; i < numeros.length; i++) {
        tabla_numeros = tabla_numeros + numeros[i] + ", "
    }
    for (let j = 0; j < letras.length; j++) {
        tabla_letras = tabla_letras + letras[j] + ", "
    }
    alert("Datos introducidos:\n" +
        "Numeros: " + tabla_numeros + "\n" +
        "Letras: " + tabla_letras + "\n")
}