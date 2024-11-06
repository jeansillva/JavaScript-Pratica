// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).
    

function verificaTriangulo(lado1, lado2, lado3){
    if(lado1 === lado2 && lado2 === lado3){
        console.log('Triangulo Equilatero')
    } else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        console.log('Triangulo Isósceles')
    } else{
        console.log('Escaleno')
    }
}

verificaTriangulo(10, 10, 10)