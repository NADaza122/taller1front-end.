//EJERCICIO FIGURAS GEOMETRICAS AREA Y PERIMETRO//

//CÍRCULO AREA// 
    //definicion de las constante principales
    const Circulo=document.getElementById('circulocalculo')
    const pi=3.141592

    let circulocalculo = () => {

    //creacion de la constante
    const areacirculo=document.getElementById('radiocirculo').value
    //operacion 
    let respuesta=pi*(areacirculo*areacirculo)
     swal('Círculo Área','El área del círculo es: ' +respuesta ,'success')
    }

    //llamado de la variable
    Circulo.addEventListener('click',circulocalculo)


//CÍRCULO PERIMETRO//
    const Circulo2=document.getElementById('circulocalculo2')
    let circulocalculo2 = () => {

    const perimetrocirculo=document.getElementById('perimetrocirculo').value
    let respuesta=2*pi*(perimetrocirculo*perimetrocirculo)
     swal('Círculo Perímetro','El perímetro del círculo es: ' +respuesta ,'success')
    }

    Circulo2.addEventListener('click',circulocalculo2)



//CUADRADO AREA//
    const Cuadrado=document.getElementById('cuadradocalculo')

    let cuadradocalculo=()=>{

    const areacuadrado=document.getElementById('areacuadrado').value
    let respuesta=areacuadrado*areacuadrado
     swal('Cuadrado Área','El área del cuadrado es: ' +respuesta ,'success')
    }

    Cuadrado.addEventListener('click',cuadradocalculo)


//CUADRADO PERIMETRO//
    const Cuadrado2=document.getElementById('cuadradocalculo2')

    let cuadradocalculo2=()=>{

    const perimetrocuadrado=parseFloat(document.getElementById('perimetrocuadrado').value)
    let respuesta=(perimetrocuadrado+perimetrocuadrado+perimetrocuadrado+perimetrocuadrado)
     swal('Cuadrado Perímetro','El perímetro del cuadrado es: ' +respuesta ,'success')
    }

    Cuadrado2.addEventListener('click',cuadradocalculo2)



//TRIÁNGULO AREA//
    const Triangulo=document.getElementById('triangulocalculo')


    let areatriangulo=()=>{
    const triangulobase=parseFloat(document.getElementById('triangulobase').value)
    const trianguloaltura=parseFloat(document.getElementById('trianguloaltura').value)

    let respuesta=(triangulobase*trianguloaltura/2)
     swal('Triángulo Área','El área del triángulo es: ' +respuesta ,'success')
    }

    Triangulo.addEventListener('click',areatriangulo)


//TRIÁNGULO PERIMETRO//
    const Triangulo2=document.getElementById('triangulocalculo2')

    let triangulocalculo2=()=>{

    const lado1=parseFloat(document.getElementById('lado1').value)
    const lado2=parseFloat(document.getElementById('lado2').value)
    const lado3=parseFloat(document.getElementById('lado3').value)
    let respuesta=(lado1+lado2+lado3)
     swal('Triángulo Perímetro','El perímetro del triángulo es: ' +respuesta ,'success')
    }

    Triangulo2.addEventListener('click',triangulocalculo2)


//RECTANGULO AREA//
    const Rectangulo=document.getElementById('rectangulocalculo')


    let arearectangulo=()=>{

    const rectangulobase=parseFloat(document.getElementById('rectangulobase').value)
    const rectanguloaltura=parseFloat(document.getElementById('rectanguloaltura').value)
    let respuesta=(rectangulobase*rectanguloaltura)
     swal('Rectángulo Área','El área del rectángulo es: ' +respuesta ,'success')
    }

    Rectangulo.addEventListener('click',arearectangulo)


//RECTANGULO PERIMETRO//
    const Rectangulo2=document.getElementById('rectangulocalculo2')

    let rectangulocalculo2=()=>{

    const rectangulobase=document.getElementById('rectangulobase').value
    const rectanguloaltura=document.getElementById('rectanguloaltura').value
    let respuesta=2*(rectangulobase+rectanguloaltura)
     swal('Rectángulo Perímetro','El perímetro del rectángulo es: ' +respuesta ,'success')
    }

    Rectangulo2.addEventListener('click',rectangulocalculo2)