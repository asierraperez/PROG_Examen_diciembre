function main() {
    var participante = datos_participante()
    var contrincante = datos_maquina(participante)
    var jugador = new participante()
    var ordenador = new contrincante()
    var repetir = false
    do {
        jugador.reset()
        ordenador.reset()
        jugador = juego_jugador(jugador)
        ordenador.jugar()
        comparacion(jugador, ordenador)
        ordenador.resultado = 0
        repetir = confirmar("volver a jugar")
    } while (repetir);
    alert("RESULTADO FINAL\n" +
        "Jugador - " + jugador.puntos + "\n" +
        "Ordenador - " + ordenador.puntos)
}
main()