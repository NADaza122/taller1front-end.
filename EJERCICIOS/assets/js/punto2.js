//EJERCIOS TEMPERATURAS//
const temperatura=parseInt (document.getElementById('temperatura').value);
            var opcion= document.getElementById('opcion').value;
            function selecopcion(){
                alert(opcion)
            }

            function fahrenheit(){
                const temperatura=parseInt (document.getElementById('temperatura').value);
                var opcion= document.getElementById('opcion').value;

                if(opcion=='fahrenheit'){
                swal('°FAHRENHEIT',`${temperatura}° Fahrenheit son: ${temperatura}° Fahrenheit`,'success')
                }

                else if(opcion=='celsius'){
                    conversion=((temperatura*9)/5)-+
                    swal('°FAHRENHEIT',`${temperatura}° Celsius son: ${conversion}° Fahrenheit`,'success')
                }

                else if(opcion=='kelvin'){
                    conversion=(temperatura-273.75)*5/9+32
                    swal('°FAHRENHEIT',`${temperatura}° Kelvin son: ${conversion}° Fahrenheit`,'success')
                }
            }

            function kelvin(){
                const temperatura=parseInt (document.getElementById('temperatura').value);
                var opcion= document.getElementById('opcion').value;

                if(opcion=='kelvin'){
                    swal('°KELVIN',`${temperatura}° Kelvin son: ${temperatura}° Kelvin`,'success')
                }
                
                else if(opcion=='fahrenheit'){
                    conversion=(temperatura+273.75)*5/9-32
                    swal('°KELVIN',`${temperatura}° Fahrenheit son: ${conversion}° Kelvin`,'success')
                }

                else if(opcion=='celsius'){
                    conversion=(temperatura+273.75)
                    swal('°KELVIN',`${temperatura}° Celsius son: ${conversion}° Kelvin`,'success')
                }
            }

            function celsius(){
                const temperatura=parseInt (document.getElementById('temperatura').value);
                var opcion= document.getElementById('opcion').value;
                
                if(opcion=='celsius'){
                    swal('°CELSIUS',`${temperatura}° Celsius son: ${temperatura}° Celsius`,'success')
                }

                else if(opcion=='kelvin'){
                    conversion=(temperatura-273.75)
                    swal('°CELSIUS',`${temperatura}° Kelvin son: ${conversion}° Celsius`,'success')
                }

                if(opcion=='fahrenheit'){
                conversion=(temperatura-32)*5/9
                swal('°CELSIUS',`${temperatura}° Fahrenheit son: ${conversion}° Celsius`,'success')
                }
            }
