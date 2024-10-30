function soBoaNoticia(nota){
    if(nota >=7){
        console.log('Aprovado!')
    } 
}

soBoaNoticia(8.1) //Vai exibir o resultado
soBoaNoticia(6.1) //Nao vai exibir o resultado

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verade: ' + valor)
    }
}

seForVerdadeEuFalo() //falso, entao nao imprime
seForVerdadeEuFalo(null) //falso, entao nao imprime
seForVerdadeEuFalo(undefined) //falso, entao nao imprime
seForVerdadeEuFalo(Nan) //falso, entao nao imprime
seForVerdadeEuFalo('') //falso, entao nao imprime
seForVerdadeEuFalo(0) //falso, entao nao imprime

seForVerdadeEuFalo(-1) //True, imprime
seForVerdadeEuFalo(' ') //True, imprime
seForVerdadeEuFalo([]) //True, imprime array vazio
seForVerdadeEuFalo({}) //True, imprime objeto vazio
