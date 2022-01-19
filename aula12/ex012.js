var agora = new Date()
hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 0 && hora < 5) {
    console.log('Boa MADRUGADA!')
} else if (hora < 12) {
    console.log('Bom DIA!')
} else if (hora < 18) {
    console.log('Boa TARDE!')
} else {
    console.log('Boa NOITE!')
}