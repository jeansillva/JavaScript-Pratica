//Factory simples, retorna um objeto
function criarPessoa(nome, sobrenome){
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

console.log(criarPessoa('Jean', 'Silva'))
