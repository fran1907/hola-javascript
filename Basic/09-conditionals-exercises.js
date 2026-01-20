// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "fran"
if(nombre == "fran"){
    console.log(`Tu nombre es ${nombre}`)
}



// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let pin = 123454
if(nombre == "fran" && pin == 12345){
    console.log("Has iniciado sesion")
}else{
    console.log("Credenciales incorrectas")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 0

if(numero > 0){
    console.log(`${numero}Es positivo`)
}else if(numero < 0){
    console.log(`${numero} Es negativo`)
}else{
    console.log("El numero es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 18
let mayorEdad = 18

if (edad >= 18){
    console.log("Puedes votar")
}else{
    let edadFaltante = mayorEdad - edad
    console.log(`Te faltan ${edadFaltante} años para poder votar`)
}



// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const edad5 = 17
const categoria = edad5 >= 18 ? "adulto" : "menor"
console.log(categoria)


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 5
let estacionAño = ""

if (mes >= 1 && mes <=3){
    estacionAño = "invierno"
}
if (mes >= 4 && mes <=6){
    estacionAño = "primavera"
}
if (mes >= 7 && mes <=9){
    estacionAño = "verano"
}
if (mes >= 10 && mes <=12){
    estacionAño = "otoño"
}
console.log(estacionAño)
// 


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let mes2 = 3
let dias

if (mes2 === 1 || mes2 === 3 || mes2 === 5 || mes2 === 7 || mes2 === 8 || mes2 === 10 || mes2 === 12) {
    dias = "31 días"
} 
else if (mes2 === 4 || mes2 === 6 || mes2 === 9 || mes2 === 11) {
    dias = "30 días"
}
else if (mes2 === 2) {
    dias = "28 días (29 en año bisiesto)"
}
else {
    dias = "Mes inválido"
}

console.log(dias)



// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = 2
let Saludo

switch(idioma){
    case 1:
        Saludo = "Hola"
        break
    case 2:
        Saludo = "Hello"
        break
    case 3:
        Saludo = "Bonjour"
        break

    default:
        Saludo = "Idioma no reconocido"
}
console.log(Saludo)


// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes3 = 4
let estacionAño3 = ""

switch (true) {
    case (mes3 >= 1 && mes3 <= 3):
        estacionAño3 = "invierno"
        break
    case (mes3 >= 4 && mes3 <= 6):
        estacionAño3 = "primavera"
        break
    case (mes3 >= 7 && mes3 <= 9):
        estacionAño3 = "verano"
        break
    case (mes >= 10 && mes3 <= 12):
        estacionAño3= "otoño"
        break
    default:
        estacionAño3 = "mes incorrecto"
}

console.log(estacionAño3)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let mes4 = 4
let dias3 = ""
switch (mes4) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        dias3 = "31 días"
        break

    case 4: case 6: case 9: case 11:
        dias3 = "30 días"
        break

    case 2:
        dias3 = "28 días (29 en año bisiesto)"
        break

    default:
        dias3 = "Mes inválido"
}

console.log(dias3)