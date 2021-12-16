function entrada_numeros(numeros) {
    var aux_entrada_numeros = numeros
    var valor = 0
    var terminar = false
    do {
        valor = prompt("Introduce un número del 0 al 9")
        valor = parseInt(valor)
        if ((valor >= 0) & (valor <= 9)) {
            aux_entrada_numeros.push(valor)
        } else {
            alert(valor + " no es un numero válido, intentalo de nuevo")
        }
        terminar = confirmar("introducir otro número")
    } while (terminar)
    return numeros

}