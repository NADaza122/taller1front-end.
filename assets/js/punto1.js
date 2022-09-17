//EJERCICIO PALABRA//

/*LONGITUD*/
 function Longitud(){
    let palabra=prompt("Digite aqui la palabra para hallar su Longitud:")
    swal('Longitud','La Longitud de su palabra es: ' + palabra.length, 'success');
}

/*MAYUSCULAS*/
function Mayusculas(){
let palabra=prompt("Digite aqui la palabra para pasar de Minusculas a Mayusculas:")
    swal('Mayusculas','Su palabra en Mayusculas es: ' + palabra.toUpperCase(),'success');
}

/*MINUSCULAS*/
function Minusculas(){
let palabra=prompt("Digite aqui la palabra para pasar de Mayusculas a Minusculas:")
    swal('Minusculas','Su palabra en Minisculas es: ' + palabra.toLowerCase(), 'success');
}

/*PRIMERA LETRA*/
function PrimeraL(){
let palabra=prompt("Digite aqui la palabra para hallar la Primera letra:")
    swal('Primera Letra','La Primera letra de su palabra es: ' + palabra.charAt(), 'success');
}
