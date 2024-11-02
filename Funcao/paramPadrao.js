//Estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1()) //Vai assumir o valor padrao
console.log(soma1(3)) 
console.log(soma1(0, 0, 0)) //Vai retornar falso por ser 0 entao assume o valor 1

//Estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c //Mais segura
}

//valor padrao do ES2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}