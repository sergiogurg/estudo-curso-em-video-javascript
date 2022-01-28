let btn1 = document.querySelector('input#btn1')
btn1.addEventListener('click', apertar1)

let btn2 = document.querySelector('input#btn2')
btn2.addEventListener('click', apertar2)

let btn3 = document.querySelector('input#btn3')
btn3.addEventListener('click', apertar3)

function apertar1() {
    window.alert('Você apertou o 1º botão!')
}

function apertar2() {
    window.alert('Você apertou o 2º botão!')
}

function apertar3() {
    window.alert('Você apertou o 3º botão!')
}