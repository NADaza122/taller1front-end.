//EJERCICIO PALABRA//
//FUNCION PARA EL INPUT DE LAS PALABRAD DIGITADAS//
  function input(){
    const palabra = new palabra(document.getElementById("palabra").value);
};

/*LONGITUD*/
  function Longitud(){
    let palabra=document.getElementById("palabra").value;
    swal('Longitud','La Longitud de su palabra es: ' + palabra.length, 'success');
}

/*MAYUSCULAS*/
  function Mayusculas(){
    let palabra=document.getElementById("palabra").value;
    swal('Mayusculas','Su palabra en Mayusculas es: ' + palabra.toUpperCase(),'success');
}

/*MINUSCULAS*/
  function Minusculas(){
    let palabra=document.getElementById("palabra").value;
    swal('Minusculas','Su palabra en Minisculas es: ' + palabra.toLowerCase(), 'success');
}

/*PRIMERA LETRA*/
  function PrimeraL(){
    let palabra=document.getElementById("palabra").value;
    swal('Primera Letra','La Primera letra de su palabra es: ' + palabra.charAt(), 'success');
}
