const escola = "Cod3r"

console.log(escola.charAt(4)) //O indice sempre inicia em 0
console.log(escola.charCodeAt(3)) //Pega o resultado de acordo com a tabela Unicode
console.log(escola.indexOf("3")) //Pega o indice associado ao digito 3

console.log(escola.substring(1)) //Imprime partir do indice 1 ate o final
console.log(escola.substring(0,3)) //Vai de determinado indice a outro

console.log('Escola '.concat(escola).concat('!')) //Concatena strings e variaveis
console.log(escola.replace('3', 'e')) //Substitui um valor por outro

console.log('Ana, Maria, Pedro'.split(',')) //Transforma string separada por virgula (pode ser outro caracter) em array
