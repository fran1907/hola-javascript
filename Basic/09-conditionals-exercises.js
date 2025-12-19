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

let mes = "5"
let estacionAño

switch (mes){
    case 0:
        if(mes >=1 && mes <= 3)
        estacionAño = "invierno"
        break
    case 1:
        if(mes >=3 && mes <= 6)
        estacionAño = "primavera"
        break
    case 2:
        if(mes >=6 && mes <= 9)
        estacionAño = "verano"
        break
    case 3:
        if(mes >=9 && mes <= 12)
        estacionAño = "otoño"
        break
    default:
        estacionAño = "Estacion incorrecta"
}
console.log(estacionAño)



// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma



// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7