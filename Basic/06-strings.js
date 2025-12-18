let miNombre = "Raul"
let greeting = "Hola, " + miNombre + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[10])

//Metodos comunes

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Raul"))
console.log(greeting.indexOf("Paco"))
console.log(greeting.includes("Raul"))
console.log(greeting.slice(0, 5))
console.log(greeting.replace("Raul", "Paco"))

// Template literals(plantillas literales)

let message = `Hola este es mi
curso de JavaScript`
console.log(message)

let email = "r@gmail.com"
console.log(`Hola ${miNombre}! Tu email es ${email}`)



