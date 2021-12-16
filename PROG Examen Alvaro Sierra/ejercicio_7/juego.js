function juego_jugador(participante) {
    var aux_jugador=participante
    var valido = false
    while (!valido) {
        menu = parseInt(prompt("Elige.\n" +
            "1.-Piedra\n" +
            "2.-Papel\n" +
            "3.-Tijera"))
        switch (menu) {
            case 1:
                aux_jugador.piedra = true
                valido=true
                break;
            case 2:
                aux_jugador.papel = true
                valido=true
                break;
            case 3:
                aux_jugador.tijera = true
                valido=true
                break;
            default:
                alert("Entrada no válida, intentalo de nuevo")
                break;
        }
    }
    return aux_jugador
    }