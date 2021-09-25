class Persona {
    constructor(nombre, juego) {
      this.nombre = nombre;
      this.juego = juego;
}};

var entrada = prompt("Ingrese su nombre y apellido");
var juegos = prompt("Ingrese su juego favorito");
juegos = juegos.toUpperCase();
const ingresado1 = new Persona(entrada,juegos);
const ingresados=[ingresado1];
console.log(ingresados);
bienvenido(juegos,ingresado1);
function bienvenido(juegos,ingresado1){
switch(juegos){
    case 'LOL':      
    alert("Bienvenido " + ingresado1.nombre +". El proximo encuentro de LOL es contra 9z en 1 dia");
        break;
        case 'CS-GO':     
        alert("Bienvenido " + ingresado1.nombre +". El proximo encuentro de CS-GO es contra 9z en 1 dia");
            break;
            case 'VALORANT':
            alert("Bienvenido " + ingresado1.nombre +". El proximo encuentro de Valorant es contra 9z en 1 dia");
                break;
                case 'TFT':
                 alert("Bienvenido " + ingresado1.nombre +". El proximo de TFT es contra 9z en 1 dia");
                    break;
                    default:
                    alert("Bienvenido " + ingresado1.nombre +". Todavia no tenemos equipo de su juego favorito");
                        break;}}                               
class contactar{
    constructor(nombreduda,mail){
    this.nombreduda = nombreduda;
    this.mail=mail;}}
let usuarios = JSON.parse(localStorage.getItem('usuarios'))
if (!usuarios) {
    usuarios = []
}
const getAll = () => {
    return usuarios
}
const create = (usuario) => {
    usuarios.push(usuario)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}
var formmail = $("#mailid")[0];
var formnombre = $("#nombreid")[0];
const URL_JSON = "../Data/Pruebadatos.json";

$(document).ready(function(){
    $("#formcontacto").submit(function(event){
        
        event.preventDefault();
        const nombreform = formnombre.value;
        const mailform = formmail.value;
    123
        const usuario = new contactar(nombreform,mailform)
        console.log(usuario);
        create(usuario);
        
        /* Aplicar ajax sin la explicacion de ni un ejemplo durante la clase y sin el after subido esta dificil */
        $.ajax({
            type: "post",
            url: "../Data/Pruebadatos.json",
            dataType: "json",
            data: JSON.stringify(usuario),
            success: function (response) {
                console.log(response);
                $("<li></li>",{
                    text:"Tu mensaje ha sido enviado"
                }).appendTo("#ULID");      
            }
        });   
    })});