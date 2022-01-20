var btnn = document.querySelector('input#btn')
btnn.addEventListener('click', tabuada)

function tabuada() {
    let txtnum = document.querySelector('input#num')
    let tab = document.querySelector('select#sel')

    if (txtnum.value.length == 0) {
        window.alert('Por favor, digite um número.')
    } else {
        let num = Number(txtnum.value)
        tab.innerHTML = ''
        for (let cont = 1 ; cont <= 10 ; cont++) {
            let item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num*cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
        }
    }
}