const { remove } = require("lodash");

/*Trivia de preguntas varias*/
const respuestas = [];
var jugar = prompt("Si desea jugar la trivia");
var puntos = 0;
if (jugar.toUpperCase() === "SI"){
    for (let i = 1; i <= 5; i++){
        switch(i){
            case 1:
                var pregunta1 = prompt("Cual es el nombre del fundador");
                pregunta1 = pregunta1.toUpperCase();
                respuestas.push(pregunta1);
                if ((pregunta1=="MATIAS") || (pregunta1=="MATI")){
                    alert("La respuesta es Correcta, suma 1 punto");
                    puntos++;
                    break;
                }else{
                    alert("La respuesta Correcta era Matias");
                    break;
                }    
            case 2:
                var pregunta1 = prompt("A las cuentas rondas se gana en el Counter Strike");
                pregunta1 = pregunta1.toUpperCase();
                respuestas.push(pregunta1);
                if ((pregunta1=="dieciseis") || (pregunta1==16)){
                    alert("La respuesta es Correcta, suma 1 punto");
                    puntos++;
                    break;
                }else{
                    alert("La respuesta Correcta era 16");
                    break;
                }    
            case 3:
                var pregunta1 = prompt("Quien gano el ultimo mundial de TFT");
                pregunta1 = pregunta1.toUpperCase();
                respuestas.push(pregunta1);
                if ((pregunta1=="NO HUBO") || (pregunta1=="NO SE JUGO")){
                    alert("La respuesta es Correcta, suma 1 punto");
                    puntos++;
                    break;
                }else{
                    alert("La respuesta Correcta era todavia no se jugo");
                    break;
                }    
            case 4:
                var pregunta1 = prompt("Como se llama el CM de Black Jaga");
                pregunta1 = pregunta1.toUpperCase();
                respuestas.push(pregunta1);
                if ((pregunta1=="MATEO") || (pregunta1=="MATE")){
                    alert("La respuesta es Correcta, suma 1 punto");
                    puntos++;
                    break;
                }else{
                    alert("La respuesta Correcta era MATEO");
                    break;
                }    
            case 5:
                var pregunta1 = prompt("Cual es el nombre del fundador");
                pregunta1 = pregunta1.toUpperCase();
                respuestas.push(pregunta1);
                if ((pregunta1=="MATIAS") || (pregunta1=="MATI")){
                    alert("La respuesta es Correcta, suma 1 punto");
                    puntos++;
                    break;
                }else{
                    alert("La respuesta Correcta era Matias");
                    break;
                }
        }
    }
    alert("Hiciste "+ puntos+ " de puntos de trivia");
}else{
    alert("Sos un aburrido")
}

function eliminar(){
    $("#Valoran").fadeOut();
    $("#Valoran").fadeOut("slow");
    $("#Valoran").fadeOut(5000);
}
function eliminar1(){
    $("#Lolete").fadeOut();
    $("#Lolete").fadeOut("slow");
    $("#Lolete").fadeOut(5000);
}
function eliminar2(){
    $("#cs").fadeOut();
    $("#cs").fadeOut("slow");
    $("#cs").fadeOut(5000);
}
function eliminar3(){
    $("#tft").fadeOut();
    $("#tft").fadeOut("slow");
    $("#tft").fadeOut(5000);
}