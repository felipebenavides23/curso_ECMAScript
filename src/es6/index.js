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

  
  let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
    + "otra frase epica que necesitamos."
  
  // es6
  let lorem2 = `otra frase epica que necesitamos
  ahora es otra frase epica
  `;
  
  console.log(lorem);
  console.log(lorem2);
  
  let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
  }
  
  console.log(person.name, person.age);
  
  let { name } = person;
  console.log(name);
  
  let team1 = ['Oscar', 'Julian', 'Ricardo'];
  let team2 = ['Valeria', 'Yesica', 'Camila'];
  
  let education = ['David', ...team1, ...team2];
  
  console.log(education);
  
  {
    var globalVar = "Global Var";
  }
  
  {
    let globalLet = 'Global Let';
    console.log(globalLet);
  }
  
  console.log(globalVar);
  
  const a = 'b';
  a = 'a';
  console.log(a);
  
  let name = 'oscar';
  let age = 32;
  
  //es5
  obj = { name: name, age: age };
  //es6
  obj2 = { name, age };
  console.log(obj2);
  
//   arrow function

const names =[
    {
        name: 'felipe', ciudad:'sogamoso'
    },
    {
        name: 'mariana', ciudad:'sogamoso'
    }
]

let listarnombres= names.map(function(item){
    console.log(item.name)
})

let lsitarnombres2 = names.map(item => console.log(item.name))

const primerapromesa = () =>{
    return new Promise((resolve,reject) => {
        if(false){
            resolve('hey')
        }
        else{
            reject('upps')
        }
    }
    )
}

primerapromesa().then((response)=> console.log(response)).catch(error=>console.log(error))

class calculadora{
    constructor(){
        this.valor1=0;
        this.valor2 = 0
    }

    suma(valor1,valor2){
        this.valor1 = valor1
        this.valor2 = valor2
        return this.valor1 + this.valor2;
    }
}

const calc = new calculadora();
console.log(calc.suma(96,64))


import {holamundo} from './modulo'

console.log(holamundo())


function* holamundog(){
    if(true){
        yield 'hola,'
    }
    if(true){
        yield'mundo'
    }
}
 const generadorhola = holamundog();

 console.log(generadorhola.next().value, generadorhola.next().value)
 console.log(generadorhola.next().value)
 console.log(generadorhola.next().value)

