const data ={
    frontend:'felipe',
    backend:'luis',
    desing:'castillo'
}

const entries= Object.entries(data)
console.log(entries);

console.log (entries.length)

const data ={
    frontend:'felipe',
    backend:'luis',
    desing:'castillo'
}


const values = Object.values(data)
console.log(values)
console.log(values.length)


const string = 'hola'

console.log(string.padStart(48, 'hi'))
console.log(string.padStart(12,'------'))


const holamundo = ()=>{
    return new Promise((resolve,reject)=>{
        (true)
         ? setTimeout(() => resolve('hola mundo'),3000)
         :reject(new Error('test error'))
    })
}

const holaasync = async() =>{
   const hello =await holamundo()
   console.log(hello)
}
holaasync();


const otrafuncion = async () =>{
    try {
        const hello1 = await holamundo();
        console.log(hello1)
    }
    catch{
        console.log(error);
    }
}

otrafuncion();