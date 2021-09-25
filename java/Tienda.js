const URLJSON = "../Data/ArchivoProductos.json";
$("#compra").click(() => {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      let misDatos = respuesta;
      console.log(misDatos[1]);
      var dato1 = JSON.parse(misDatos[1].Stock);
      if (dato1 === 0) {
        alert("Este producto esta agotado");
        $("#compra").html("OUT OF STOCK");
        $("#compra4").html("OUT OF STOCK");
      } else {
        $("#compra").html("Se Añadio al Carrito");
        $("#compra4").html("Se Añadio al Carrito");
      }
    }
  });
});
$("#compra1").click(() => {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      let misDatos = respuesta;
      console.log(misDatos[0]);
      var dato = JSON.parse(misDatos[0].Stock);
      if (dato === 0) {
        alert("Este producto esta agotado");
        $("#compra1").html("OUT OF STOCK");
        $("#compra5").html("OUT OF STOCK");
      } else {
        $("#compra5").html("Se Añadio al Carrito");
        $("#compra1").html("Se Añadio al Carrito");
      }
    }
  });
});
$("#compra2").click(() => {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      let misDatos = respuesta;
      console.log(misDatos[3]);
      var dato = JSON.parse(misDatos[3].Stock);
      if ((dato.Stock === 0)) {
        alert("Este producto esta agotado");
        $("#compra2").html("OUT OF STOCK");
      } else {
        $("#compra2").html("Se Añadio al Carrito");
      }
    }
  });
});
$("#compra3").click(() => {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      let misDatos = respuesta;
      console.log(misDatos[2]);
      var dato = JSON.parse(misDatos[2].Stock);
      if ((dato.Stock === 0)) {
        alert("Este producto esta agotado");
        $("#compra2").html("OUT OF STOCK");
      } else {
        $("#compra2").html("Se Añadio al Carrito");
      }
    }
  });
});
$("#compra4").click(() => {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      let misDatos = respuesta;
      console.log(misDatos[1]);
      var dato = JSON.parse(misDatos[1].Stock);
      if ((dato.Stock === 0)) {
        alert("Este producto esta agotado");
        $("#compra2").html("OUT OF STOCK");
      } else {
        $("#compra2").html("Se Añadio al Carrito");
      }
    }
  });
});
$("#compra5").click(() => {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      let misDatos = respuesta;
      console.log(misDatos[0]);
      var dato = JSON.parse(misDatos[0].Stock);
      if (dato === 0) {
        alert("Este producto esta agotado");
        $("#compra1").html("OUT OF STOCK");
        $("#compra5").html("OUT OF STOCK");
      } else {
        $("#compra5").html("Se Añadio al Carrito");
        $("#compra1").html("Se Añadio al Carrito");
      }
    }
  });
});
/* $(document).ready(function(){    
 $('#open').on('click', function(){         
$('#popup').fadeIn('slow');         
$('.popup-overlay').fadeIn('slow');         
$('.popup-overlay').height($(window).height());         
return false;     });      
 $('#close').on('click', function(){         $('#popup').fadeOut('slow');         
$('.popup-overlay').fadeOut('slow');         
return false;     }); }); */

/* 

document.querySelector("#compra").addEventListener('click', stockardo);

function stockardo(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'ArchivoProductos.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            
            let datos = JSON.parse(this.responseText);
            var producto1 = "REMERA";

            for (let dato of datos){
              const productoencontrado = datos.find((dato) => dato.Nombre === producto1);
              if (productoencontrado != undefined) {
                console.log(productoencontrado);
                  if(dato.Stock = "0"){
                      alert("Este producto esta agotado");
                      $("#compra1").html("OUT OF STOCK");
                      $("#compra5").html("OUT OF STOCK");
                  }
                  else{
                      $("#compra5").html("Se Añadio al Carrito");
                      $("#compra1").html("Se Añadio al Carrito");
                  }
                  break;
              } else {
              console.log("Este producto no se encuentra en la tienda");
              }
            }  
            }
        }
    }
 */
