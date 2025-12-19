//if, else if, else

// if (si)
let age = 20

if (age == 37){
    console.log("La edad es 37")
}


// else ( si no )

if (age != 37){
    console.log("La edad no es 37")
} else{
    console.log( "LA EDAD ES 37")
}

//ELSE IF (si no, si)

if (age == 37){
    console.log("La edad es 37")
} else if (age < 18){
    console.log("Eres menor de edad")
} else{
    console.log( "LA EDAD no ES 37 ni es menor de edad")
}

// switch

let day = 6
let dayName

switch (day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default: 
        dayName = "Numero de dia incorrecto"
}  
console.log(dayName)
 