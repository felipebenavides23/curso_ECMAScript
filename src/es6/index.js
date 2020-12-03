function newFuntion(name,age,country){
    var name = name || 'felipe'
    var age = age || 20
    var country = country || 'col'
    console.log(name,age,country)
}

newFuntion();
newFuntion('luis',25,'mx')

function newFuntion2(name ='felipe',age =20,country ='col') {
console.log(name,age,country)
}

newFuntion2();
newFuntion2('luis',25,'mx')


let hello = 'hola'
let world = 'mundo'
let  frase = hello + ' ' + world
console.log(frase)
let frase2 =`${hello} ${world}`