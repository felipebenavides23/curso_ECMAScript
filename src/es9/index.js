const obj ={
    name :'luis',
    age : 23,
    country :'col'
}

let {name,... all} = obj
console.log(name, all)

const obj = {
    valor1 : 1,
    valor2 : 2
}

const obj2 ={
    ... obj,
    valor3 : 3
}

console.log(obj2)


const holamundo = () =>{
    return new Promise((resolve,reject) =>{
        (true)? resolve('hola mundo'): reject(new Error('test error'))

    })
}

holamundo()
.then(Response => console.log(Response))
.catch(error => console.log(error))
.finally(()=> console.log('final del proseso'))

const regexdata =  /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match =regexdata.exec('2018-04-20')
const year = match[1]
const mes = match[2]
const dia = match[3]

console.log( ` ${year} ${mes} ${dia}`)