//EJERCICIO TIPO TRINAGÚLO//
let ttriangulo = () => {
    const Lado1= document.getElementById('Lado1').value
    const Lado2= document.getElementById('Lado2').value
    const Lado3= document.getElementById('Lado3').value


    //HALLANDO EL TIPO DE TRIANGULO DEPENDIENDO DE SUS LADOS//
     if (Lado1==Lado2 && Lado1==Lado3 &&Lado2==Lado1 &&Lado2==Lado3 &&Lado3==Lado1 && Lado3==Lado2 ){
        swal('Tipo Triangúlo','Este triangúlo es de tipo: ' + "Isósceles",'success')
    }

    else if (Lado1!=Lado2 && Lado1!=Lado3){
        swal('Tipo Triangúlo','Este triangúlo es de tipo: ' + "Escaleno",'success')
    }

    else{
        swal('Tipo Triangúlo','Este triangúlo es de tipo: ' + "Equilatero",'success')
    }
    
    };



    //CREACION DE LA CONSTANTE Y LLAMADO DE  ESTA MISMA PARA EL RESULTADO//
    const tipodetriangulo=document.getElementById('ttriangulo')

    tipodetriangulo.addEventListener('click',ttriangulo)

