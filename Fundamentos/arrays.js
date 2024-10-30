const valores = [7.7, 8.9, 6.3, 9.2] //cria uma variavel array
console.log(valores[0], valores[3]) //Vai exibir os indices 0 e 3

valores[4] = 10 //adiciona o indice 4 com valor 10
console.log(valores) //imprime o array
console.log(valores.length) //imprime a quantidade de elementos presente no array

valores.push({id: 3}, false, null, 'teste') //Adiciona valores ao array
console.log(valores)

console.log(valores.pop)//remove o ultimo valor do array
delete valores[0] //deleta o valor de determinado indice
console.log(valores)
