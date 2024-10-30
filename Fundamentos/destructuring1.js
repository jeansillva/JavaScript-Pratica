// novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: '5',
    endereco : {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//retire nome e idade de pessoa
const {nome, idade} = pessoa
console.log(nome, idade)

//retire nome e idade de pessoa, armazene em n e i 
const {nome: n, idade: i} = pessoa
console.log(n,i)

//É possivel atribuir um valor padrão como true
const {sobrenome, bemHumorada = true} = pessoa

//Cria logradouro, numero e cep extraindo de endereço localizado em pessoa
const {endereco: {logradouro, numero, cep}} = pessoa


