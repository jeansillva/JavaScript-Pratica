function teste1(num){
    if(num >7)
        console.log(num)
        console.log('Final') //Sempre sera executado
} 

teste1(6)
teste1(8)

function teste2(num){
    if(num >7); //Nao faz nada, esta sendo separado por ; do restante do codigo
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)