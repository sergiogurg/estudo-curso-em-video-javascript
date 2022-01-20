/* Quando a janela carrega totalmente, executa a function carregar()*/
window.addEventListener('load', carregar) 

function carregar() {
    var data = new Date()
    var hora = data.getHours()
    // hora = 0

    var msg = window.document.querySelector('div#container-msg')
    msg.innerHTML = `Agora são ${hora} horas.`

    var titulo = window.document.querySelector('h1')

    var img = window.document.querySelector('img#foto')

    if (hora >= 0 && hora < 5) {
        titulo.innerHTML = 'Boa Madrugada!'
        img.src = 'images/madrugada-reduced.png'
        window.document.body.style.backgroundColor = 'rgb(16, 25, 39)'
    } else if (hora < 12) {
        titulo.innerHTML = 'Bom Dia!'
        img.src = 'images/manha-reduced.png'
        window.document.body.style.backgroundColor = 'rgb(221, 233, 119)'
    } else if (hora < 18) {
        titulo.innerHTML = 'Boa Tarde!'
        img.src = 'images/tarde-reduced.png'
        window.document.body.style.backgroundColor = 'rgb(223, 191, 88)'
    } else {
        titulo.innerHTML = 'Boa Noite!'
        img.src = 'images/noite-reduced.png'
        window.document.body.style.backgroundColor = 'rgb(10, 52, 82)'
    }
}