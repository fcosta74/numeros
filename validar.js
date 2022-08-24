function calc(){
    var nome = prompt('Digite o seu nome: ')
    var num = Number(prompt(`${nome} digite o número que você calça.`))  
    var nas = Number(prompt('Digite o ano que você nasceu.'))
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()
    res.innerHTML = document.querySelector ('res')

    soma = (num * 100) - nas + anoAtual - (num*100)

    res.innerHTML = `<h2>${nome} você tem ou irá completar ${soma} anos de idade neste ano de ${anoAtual}.</h2>`
}

