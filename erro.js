function tratarErroELancar(erro){
    throw new Error('Aconteceu um erro aqui!')
}

function imprimirNomeGritado(obj) {
    try { // Bloco que potencialmente irá gerar um erro
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) { //Tratamento, relançar erro, objeto com detalhes, boolean
        tratarErroELancar(e)
    } finally { // Sempre é executado
        console.log('final')
    }
}

const obj = {nome: 'Robeto' }
imprimirNomeGritado(obj) //Vai ocorrer um erro pois nome nao esta definido (correto: name)

