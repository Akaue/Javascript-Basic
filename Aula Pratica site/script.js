function carregar() {
    var msg = window.document.getElementById("msg")
    var msg2 = window.document.getElementById("msg2")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    // var hora = 22
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${min}`
   

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#e3cd9f'
        msg2.innerHTML = "Bom dia"
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
        msg2.innerHTML = "Boa tarde"
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
        msg2.innerHTML = "Boa noite"
    }

}
