function main() {
    var numeros = []
    var letras = []
    var repetir = false
    do {
        var menu = prompt("Elige una de las siguientaas opciones:\n" +
            "1.-Introducir numeros\n" +
            "2.-Introducir letras\n" +
            "3.-Mostrar datos existentes\n" +
            "4.-Finalizar el programa")
        menu = parseInt(menu)
        switch (menu) {
            case 1:
                numeros = entrada_numeros(numeros)
                break;
            case 2:
                letras = entrada_letras(letras)
                break;
            case 3:
                visualizar(numeros, letras)

                break;
            case 4:
                repetir = confirmar("finalizar el programa")

                break;
            default:
                alert("Operación no reconocida, intentalo de nuevo")
                break;
        }


    } while (!repetir)


}
main()