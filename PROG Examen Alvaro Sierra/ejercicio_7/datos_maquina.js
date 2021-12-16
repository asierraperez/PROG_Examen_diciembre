function datos_maquina(participante) {
    var adversario = function () {
        this.resultado = 0
    }

    for (const id in participante.prototype) {
        adversario.prototype[id] = participante.prototype[id]
    }

    adversario.prototype.jugar = function juego() {
        this.resultado = Math.floor(Math.random() * 101 - 0) + 0
        if (this.resultado <= 33) {
            this.piedra = true
        } else if ((this.resultado > 33) & (this.resultado <= 66)) {
            this.papel = true
        } else {
            this.tijera = true
        }
    }

    /*adversario.prototype.puntos = 0
    adversario.prototype.sumar = function suma_puntos() {
        this.puntos++
    }*/

    return adversario


}