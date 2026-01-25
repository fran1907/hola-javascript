// Map

// Declaracion

let myMap = new Map()
console.log(myMap)

// Inicializacion

myMap = new Map([
    ["name", "Francisco"],
    ["email", "fran@gmail.com"],
    ["age", "22"]
])
console.log(myMap)

//  Metodos y propiedades

//  set

//  Si la clave no existe añade un nuevo valor
myMap.set("alias", "Fran")
//  Si la clave existe lo actualiza
myMap.set("name", "Francisco Ruiz")

console.log(myMap)

//  get

console.log(myMap.get("alias"))
console.log(myMap.get("name"))


//  has

console.log(myMap.has("alias"))
console.log(myMap.has("nombre"))

//  delete

myMap.delete("email")
console.log(myMap)

//  keys y values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

//  size

console.log(myMap.size)

//  clear

myMap.clear()

console.log(myMap)

