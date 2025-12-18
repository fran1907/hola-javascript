// 1. Concatena dos cadenas de texto

let miNombre = "Raul"
let greeting = "Hola, " + miNombre + "!"
let greeting2 = "Hola Buenos dias , " + miNombre + "!"



// 2. Muestra la longitud de una cadena de texto

console.log(greeting.length)


// 3. Muestra el primer y último carácter de un string

console.log(greeting[0])
console.log(greeting[greeting.length-1])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let message = `Hola esto 
es un mensaje
predeterminado`

// 6. Interpola el valor de una variable en un string

let email = "r@gmail.com"
console.log(`Hola ${miNombre}! Tu email es ${email}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(greeting.replace(" " , "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(greeting.includes("Gato"))

// 9. Comprueba si dos strings son iguales

console.log(greeting == greeting2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(greeting.length == greeting2.length)