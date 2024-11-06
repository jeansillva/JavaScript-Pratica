//Factory simples, retorna um objeto
function criarPessoa(nome, sobrenome){
    return {
        nome: nome, //Tambem pode ter apenas o nome da variavel
        sobrenome: sobrenome
    }
}

console.log(criarPessoa('Jean', 'Silva'))
