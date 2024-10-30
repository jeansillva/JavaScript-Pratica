let num1 = 1
let num2 = 2

num1++ //Pós fixado
console.log(num1)

--num1 //Pré Fixado, possui uma precedência maior que o pós fixado 
console.log(num1)

console.log(++num1 === num2--) //Aqui o incremento ocorre antes da comparação e depois dela é decrementado
console.log (num1 === num2)
