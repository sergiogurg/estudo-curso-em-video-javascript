var btn = window.document.querySelector('input#btn')
btn.addEventListener('click', contar)

function contar() {
    var txtin = window.document.querySelector('input#txtini')
    var txtf = window.document.querySelector('input#txtfim')
    var txtp = window.document.querySelector('input#txtpas')

    var res = window.document.querySelector('div#res')

    // Validação pra entrar com todos os dados:
    if (txtin.value == '' || txtf.value == '' || txtp.value == '') {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Deu bom!'
        // Conversão de string pra number:
        ini = Number(txtin.value)
        fim = Number(txtfim.value)
        pas = Number(txtpas.value)

        if (ini <= fim && pas > 0) {
            // Contagem positiva:
            res.innerHTML = ''
            for(cont=ini; cont <= fim; cont += pas) {
                res.innerHTML += `${cont} &#x1F449`
            }
        } else if (ini >= fim && pas < 0) {
            // Contagem negativa:
            res.innerHTML = ''
            for (cont=ini; cont >= fim; cont += pas) {
                res.innerHTML += `${cont} &#x1F449`
            }
        } else {    // Validação para não haver loops infinitos:
            res.innerHTML = `[ERRO] Loop INFINITO! Tente novamente.`
        }
        res.innerHTML += `&#x1F3C1`
    }

}