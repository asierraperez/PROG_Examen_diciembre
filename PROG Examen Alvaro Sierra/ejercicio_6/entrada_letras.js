function entrada_letras(letras) {
    var aux_entrada_letras = letras
    var palabra = ""
    var terminar = false
    do {
        palabra = prompt("Introduce una palabra no mayor de 4 caracteres")
        if (palabra.length > 4) {
            alert("palabra no válida, intentalo de nuevo")
        } else {
            aux_entrada_letras.push(palabra)
            terminar = confirmar("introducir otra palabra")
        }
    } while (terminar)
    return aux_entrada_letras
}