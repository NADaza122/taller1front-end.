//EJERCICIO INSTRUCTOR, NOMBRE, APELLIDO Y ASIGNATURA//
let buscar = () => {

        //Se hacen las constantes para cada atributo con su repectivo valor//
        const nombrei=document.getElementById('nombrei').value
        const apellidoi=document.getElementById('apellidoi').value
        const asignaturai=document.getElementById('asignaturai').value


        //Guardamo los datos digitados en las variables dentro de la consola//
            console.log(nombrei);
            console.log(apellidoi);
            console.log(asignaturai);

        //Y meidante este procesos aclaramos las codiciones que se tendra en cuenta//
            if (nombrei==apellidoi && apellidoi==asignaturai) {
                swal('Intructor III Trimestre','La Información Digita es: ' + "Correcta",'success')
            } else {
                swal('Intructor III Trimestre','La Información Digita es: ' + "Incorrecta",'error')
            }
    
} 

/*Creamos una nueva constante para asi mismo traer toda la informacion y que esta se valide por
asi decirlo*/
    const busqueda=document.getElementById('buscar')

    busqueda.addEventListener('click',buscar)