// array

//Declaración


let myArray = [1]
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

//INICIALIZACION

myArray = [1]
myArray2 = new Array(2)
console.log(myArray)
console.log(myArray2)


myArray = ["Francisco", "Ruiz", "Martin", true]
myArray2 = new Array("Francisco", "Ruiz", "Martin", 22)
console.log(myArray)
console.log(myArray2)


myArray2 = new Array(3)
myArray2[0] = "Francisco"
myArray2[1] = "Ruiz"
myArray2[2] = "Martin"
console.log(myArray2)


myArray = []
myArray[2] = "Francisco"
myArray[1] = "Ruiz"
console.log(myArray)

//Metodos comunes

myArray = []

//push y pop

//Agrega elementos
myArray.push("Francisco")
myArray.push("Ruiz")
myArray.push("Martin")
myArray.push(37)

console.log(myArray)

//Pop elimina el ultimo elemento del Array

console.log(myArray.pop()) //Elimina el ultimo y lo devuelve
console.log(myArray)

//Shift y unshift

myArray.shift()
console.log(myArray)


myArray.unshift("FRANCISCO")
console.log(myArray)

//lenght

console.log(myArray.length)

//clear

myArray = [0]
myArray.length = 0
console.log(myArray)


//slice

myArray = ["Francisco", "Ruiz", "Martin", 22]

let myNewArray= myArray.slice(0,2)
console.log(myArray)
console.log(myNewArray)

//splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Francisco", "Ruiz", "Martin", 22]

myArray.splice(1, 1, "Nuevo elemento")
console.log(myArray)



