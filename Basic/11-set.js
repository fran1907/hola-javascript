// set


// Declaracion

let mySet = new Set()

// Inicializacion

mySet = new Set(["Francisco", "Ruiz", "Martin", 22])
console.log(mySet)

// Metodos comunes

// add y delete

mySet.add("fran1907")
console.log(mySet)
 
//Para eliminar debemos de pasarle directamente el elemento que se quiere eliminar no vale con pasarle el indice que le corresponde en el Set
mySet.delete("fran1907")
console.log(mySet)

console.log(mySet.delete("Ruiz"))
console.log(mySet)

// has
//Para comprobar si existe un valor en el set
console.log(mySet.has("Francisco"))

// size
// Devuelve el numero de elementos que hay en el Set
console.log(mySet.size)

// Convertir un Set a Array

let myArray = Array.from(mySet)
console.log(myArray)

//Convertir un array a un set

mySet = new Set(myArray)
console.log(mySet)

