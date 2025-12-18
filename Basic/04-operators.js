//Operadores aritmeticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division
console.log(a % b) //Modulo
console.log(a ** b) //Exponente

a++ // Incremento
console.log(a)
b-- //Decremento
console.log(b)

// Operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable +=2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de comparacion

console.log(a<b)
console.log(a>b)
console.log(10>=10)
console.log(a!=6)
console.log(0 == "")
console.log(0 == " ")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

//Operadores Logicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)

// Operarios logicos

//and (&&)

console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)

// or 

console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 > 20)

// NOT (!)

console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores terrarios

const isRaining = true
isRaining ? console.log("Est lloviend0") : console.log("NO esta lloviendo")
