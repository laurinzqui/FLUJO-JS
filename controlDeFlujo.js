/* 

control de flujo



*/ 
let edadFelipe = 19; //debemos tomar en cuenta la edad de felipe
 if(edadFelipe < 18){
    console.log("Lo siento Felipe, no puedes ir a la fiesta");
 }
  let edadAxel = prompt("ingresa tu edad");
  let edadParaEntrarAlaFiesta = 18; 
   if(edadAxel < edadParaEntrarAlaFiesta){

    console.log("lo siento no puedes entrar a la fiesta");

   } else {
    console.log("felicidades, puedes entrar a la fiesta");
   }





   /*Switch

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de las variables. 
Evalua una expresion comparando el valor de un dato o variable, y ejecutando la instruccion asociada a ese caso.


 - case: Evalua el caso o condicion asociado que dispara un bloque de codigo
 - break: Termina el proceso sin que tengamos que pasar por todas las iteraciones o casos.
 - default: Termina el proceso en caso de que ninguna de las evaluaciones sea la correcta (similar al else)



switch (expresion o condicion){
    case valor1:
        //Codigo que se ejecuta si la condicion es igual a valor1
    break;

    case valor2:
        //Codigo que se ejecuta si la condicion es igual a valor2
    break;

    case valor3:
        //Codigo que se ejecuta si la condicion es igual a valor3
    break;

    case valor4:
        //Codigo que se ejecuta si la condicion es igual a valor4
    break;

    case valor5:
        //Codigo que se ejecuta si la condicion es igual a valor5
    break;

    default:
        //Ingresaste un piso incorrecto (un bloque de codigo que se ejecuta si no se cumple con ninguna de las condiciones anteriores)
}
*/

// ejemplio de switch

let pisoDestino = prompt("ingreesa el piso al que quieras ir (1 al 5) ");
switch(pisoDestino) {
case "1":
   console.log("vamos a piso 1 (suena musica de elevador de fondo) ");
   comprar();
   break;
 case "2":
      console.log( "vamos al piso 2 (suena musica de elevador de fondo) " );
      vender();
      break;
case "3":
   console.log("vamos a piso 3");
   break;
 case "4":
    console.log("vamos a piso 4");
    break; 
 case "5":
   console.log("vamos al piso 5");
   break; 
default:
      console.log("ingresaste un piso que no existe")

}

//ejercicio Evee
 var elementoEvolucion = prompt ("Ingresa el elemento con el que evolucionarás a tu pokemon");
 switch(elementoEvolucion) {
case "piedraFuego":
   console.log("tu eevee ha evolucionado a Flareon");
   break;

   case "piedraTrueno":
      console.log("tu eevee ha evolucionado a Jolteaon ");
      break;


 }
