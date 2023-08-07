function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()

    msg.innerHTML = `Agora são ${horas} horas`


    if (horas >= 0 && horas < 12) {
        //BOM DIA
        img.src = 'manha.png'

    } else if (horas >= 12 && horas < 18) {
        //BOA TARDE
        img.src = 'tarde.png'

    } else {
        //BOA NOITE
        img.src = 'noite.png'

    }
}
