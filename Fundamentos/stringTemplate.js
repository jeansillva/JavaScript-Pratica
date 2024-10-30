const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'

//Com o uso do simbolo da crase e possivel fazer quebra de linha
const template = ` 
    Olá
    ${nome}!`

    console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`) //Vai somar apenas o que esta dentro da expressao

const up = texto => texto.toUpperCase()
console.log(`Ei.. ${up('cuidado')}!`)