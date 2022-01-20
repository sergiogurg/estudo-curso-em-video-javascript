var btn = window.document.querySelector('input[type="button"]')
btn.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var formAno = window.document.querySelector('input#txtano')
    formAno.setAttribute('max', ano)

    var res = window.document.querySelector('div#res')

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formSex = window.document.getElementsByName('radsex')
        idade = ano - Number(formAno.value)

        var gênero = ''
        //formSex[0] -> gênero marcado: FEMININO
        //formSex[1] -> gênero marcado: MASCULINO

        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formSex[0].checked) {   
            gênero = 'Homem'
            if (idade >= 0 && idade < 8) {
                // Bebê Masculino
                img.setAttribute('src', 'images/foto-bebe-m.png')
            } else if (idade < 16){
                // Criança Masculino
                img.setAttribute('src', 'images/foto-crianca-m.png')
            } else if (idade < 25) {
                // Jovem Masculino
                img.setAttribute('src', 'images/foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto Masculino
                img.setAttribute('src', 'images/foto-adulto-m.png')
            } else {
                // Idoso Masculino
                img.setAttribute('src', 'images/foto-idoso-m.png')
            }
        } else if (formSex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 8) {
                // Bebê Feminino
                img.setAttribute('src', 'images/foto-bebe-f.png')
            } else if (idade < 16) {
                // Criança Feminino
                img.setAttribute('src', 'images/foto-crianca-f.png')
            } else if (idade < 25) {
                // Jovem Feminino
                img.setAttribute('src', 'images/foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulta Feminino
                img.setAttribute('src', 'images/foto-adulta-f.png')
            } else {
                // Idosa Feminino
                img.setAttribute('src', 'images/foto-idosa-f.png')
            }

        }


        


        // if (formSex.values[0].checked)




        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectado ${gênero} com idade ${idade}.</p>`
        res.appendChild(img)

    }


}