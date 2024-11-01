//Função em JS é First-Class Object (Citzens)

//Criar de forma literal
function fun1(){}

//Armazenar em variavel
const fun2 = function(){}

//Armazenar em array 
const array = [function(a,b) {return a+b}, fun1, fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//Passar função como parametro
function run(fun){
    fun()
}
