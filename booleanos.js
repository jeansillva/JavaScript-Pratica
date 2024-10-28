let isAtivo = false
console.log(isAtivo) //vai exibir falso

isAtivo = true
console.log(isAtivo) //vai exibir true

isAtivo = 1
console.log(!!isAtivo) //Vai forçar uma conversao para booleano

console.log('os verdadeiros...') 
console.log(!!3) 
console.log(!!-1)
console.log(!!' ')
console.log(!!{})
console.log(!!Infinity)

console.log('os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)