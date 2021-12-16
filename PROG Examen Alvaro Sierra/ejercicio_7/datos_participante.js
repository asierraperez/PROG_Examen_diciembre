function datos_participante(){
    var participante=function(){
        this.tijera=false
        this.piedra=false
        this.papel=false
        /*this.puntos=0
        this.sumar=function suma_puntos(){
            this.puntos++
        }*/
    }
    participante.prototype.puntos = 0
    participante.prototype.sumar = function suma_puntos() {
        this.puntos++
    }
    participante.prototype.reset=function resetear(){
        this.tijera=false
        this.piedra=false
        this.papel=false
    }
    return participante

}