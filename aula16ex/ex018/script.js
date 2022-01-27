var btnadd = window.document.querySelector('input#btnadd')
btnadd.addEventListener('click', adicionar)

var btnfin = window.document.querySelector('input#btnfin')
btnfin.addEventListener('click', finalizar)

var tab = window.document.querySelector('select#seltab')

var res = window.document.querySelector('div#res')

var vetor = []

function adicionar() {
    let txtnum = window.document.querySelector('input#txtnum')

    // Função: Não permitir campo vazio
    if(txtnum.value == '') {
        window.alert('[ERRO] Por favor, entre com algum número!')
        return
    }

    // Função: Não permitir número repetido
    for(var pos = 0; pos <= vetor.length; pos++) {
        if(vetor[pos] == txtnum.value) {
            window.alert('[ERRO] Número repetido! Tente novamente.')
            return
        }
    }

    // Função: Não permitir número fora do intervalo
    if (txtnum.value < 0 || txtnum.value > 100) {
        window.alert('Número fora dos intervalos! Tente novamente.')
        return
    }

    let num = Number(txtnum.value)

    // Limpar caixa de texto:
    txtnum.value = ''

    // Guardando o número no array:
    vetor.push(num)
    
    // Mostrar na tabela:
    
    let item = window.document.createElement('option')
    item.text = `Valor ${num} adicionado.`
    item.value = `entrada${vetor[length-1]}`
    tab.appendChild(item)

}


function finalizar() {
    // Qtde de elementos:
    let item = window.document.createElement('p')
    item.innerHTML = `Ao todo, existem ${vetor.length} elementos.`
    res.appendChild(item)

    // Maior valor informado:
    item.innerHTML += `<p>O maior valor informado é ${Math.max(...vetor)}.</p>`

    // Menor valor informado:
    item.innerHTML += `<p>O menor valor informado é ${Math.min(...vetor)}.</p>`

    // Soma:
    // item.innerHTML += `<p>Somando todos os valores ${}`

    // Media:
    
}