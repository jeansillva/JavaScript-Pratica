function soma(){
    let soma = 0
    for(let i in arguments){ // Pega o indice em cada elemento do array interna
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
