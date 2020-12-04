let array =[1,2,3, [1,2,3,[1,2,3]]]

console.log(array.flat(2))

let array =[1,2,,3,4,5]

console.log(array.flatMap(value => [value,value*2]))

let hola = '             hola       mundo   '

console.log(hola)

console.log(hola.trimStart())
console.log(hola.trimEnd())
// el error ya tiene implementado el error sin necesidad de llamar 
try{}catch{error}

// pasar una matriz a un objeto

let entries =[['name','felipe'],['edad',23]]
console.log(Object.fromEntries(entries))

let mysymbl  = 'my symbol'
let symbol = Symbol(mysymbl)
console.log(symbol.description)


