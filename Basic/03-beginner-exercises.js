// 1. Escribe un comentario en una línea

//Este es el ejercicio 1

// 2. Escribe un comentario en varias líneas

/*
Este es el ejercicio 2
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let name = "Fran"
let edad = 22
let esProgramador = true
let myBigInt = BigInt(3424234324342424343243243432)
let direccion
let telefono = null
let id = Symbol("id")


// 4. Imprime por consola el valor de todas las variables
console.log(name)
console.log(edad)
console.log(esProgramador)
console.log(myBigInt)
console.log(direccion)
console.log(telefono)
console.log(id)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof name)
console.log(typeof edad)
console.log(typeof esProgramador)
console.log(typeof myBigInt)
console.log(typeof direccion)
console.log(typeof telefono)
console.log(typeof id)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

// String
name = "Ana";

// Number
edad = 30;

// Boolean
esProgramador = false;

// Undefined
direccion = undefined;

// Null
telefono = null;

// Symbol
id = Symbol("nuevoId");

// BigInt
myBigInt = 987654321098765432109876543210n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

// Antes era String → ahora Number
name = 100;

// Antes era Number → ahora String
edad = "treinta";

// Antes era Boolean → ahora String
esProgramador = "sí";

// Antes era Undefined → ahora Boolean
direccion = true;

// Antes era Null → ahora Number
telefono = 5551234;

// Antes era Symbol → ahora String
id = "ID-001";

// Antes era BigInt → ahora Number
myBigInt = 42;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const name2 = "Fran"
const edad2 = 22
const esProgramador2 = true
const myBigInt2 = BigInt(3424234324342424343243243432)
//const direccion2 Una constante no puede quedarse sin valor inicial
const telefono2 = null
const id2 = Symbol("id")

// 9. A continuación, modifica los valores de las constantes

// En JavaScript no es posible modificar el valor de una constante

