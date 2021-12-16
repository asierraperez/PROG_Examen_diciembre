function comparacion(jugador, ordenador) {
    if (jugador.piedra) {
        if (ordenador.piedra) {
            alert("El ordenador saco piedra; Empate\n" +
            "Jugador - " + jugador.puntos + "\n" +
            "Ordenador - " + ordenador.puntos)
        }
        if (ordenador.papel) {
            ordenador.sumar()
            alert("El ordenador saco papel; Gana la máquina\n" +
                "Jugador - " + jugador.puntos + "\n" +
                "Ordenador - " + ordenador.puntos)
        }
        if (ordenador.tijera) {
            jugador.sumar()
            alert("El ordenador saco tijera; Gana el jugador\n" +
                "Jugador - " + jugador.puntos + "\n" +
                "Ordenador - " + ordenador.puntos)
        }
    }
    if (jugador.papel) {
        if (ordenador.piedra) {
            jugador.sumar()
            alert("El ordenador saco piedra; Gana el jugador\n" +
                "Jugador - " + jugador.puntos + "\n" +
                "Ordenador - " + ordenador.puntos)
        }
        if (ordenador.papel) {
            alert("El ordenador saco papel; Empate\n" +
            "Jugador - " + jugador.puntos + "\n" +
            "Ordenador - " + ordenador.puntos)

        }
        if (ordenador.tijera) {
            ordenador.sumar()
            alert("El ordenador saco tijera; Gana la máquina\n" +
                "Jugador - " + jugador.puntos + "\n" +
                "Ordenador - " + ordenador.puntos)
        }
    }
    if (jugador.tijera) {
        if (ordenador.piedra) {
            ordenador.sumar()
            alert("El ordenador saco piedra; Gana la máquina\n" +
                "Jugador - " + jugador.puntos + "\n" +
                "Ordenador - " + ordenador.puntos)


        }
        if (ordenador.papel) {
            jugador.sumar()
            alert("El ordenador saco papel; Gana el jugador\n" +
                "Jugador - " + jugador.puntos + "\n" +
                "Ordenador - " + ordenador.puntos)

        }
        if (ordenador.tijera) {
            alert("El ordenador saco tijera; Empate\n" +
            "Jugador - " + jugador.puntos + "\n" +
            "Ordenador - " + ordenador.puntos)
        }
    }

}