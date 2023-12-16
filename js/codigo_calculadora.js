const section_resultado = document.getElementById("resultado-programa");
const section_reiniciar = document.getElementById("reiniciar");
const boton_tarifa = document.getElementById("boton-calcular");
const boton_reiniciar = document.getElementById("boton-reiniciar-tarifa");
const boton_reiniciar_iva = document.getElementById("boton-reiniciar-iva");
const boton_iva = document.getElementById("boton-iva");


const section_venta = document.getElementById("seleccionar-valor-venta");
const section_tarifa = document.getElementById("seleccionar-tarifa");
const section_impuesto_reterenta = document.getElementById("seleccionar-impuesto-reterenta");
const section_impuesto_reteica = document.getElementById("seleccionar-impuesto-reteica");
const titulo_tarifa = document.getElementById("titulo-tarifa");
const boton_calcular = document.getElementById("boton-calcular");
const diferencia_tarifa = document.getElementById("titulo-diferencia-tarifa");

let tarifario = [];
let opcion_tarifa;
let mensajes;
let tarifa1;
let tarifa2;
let tarifa3;
let tarifa4;
let valor_venta;
let rete_renta;
let rete_ica;

let operacion;
let resultado;
let eleccion;




class Calculadora {
    constructor(nombre, valor){
      this.nombre = nombre
      this.valor = valor
    }
}

let tarifa_normal = new Calculadora("tarifa-estandard", 2.99);
let tarifa_especial1 = new Calculadora("tarifa-plana1", 2.29);
let tarifa_especial2 = new Calculadora("tarifa-plana2", 2.19);
let tarifa_especial3 = new Calculadora("tarifa-plana3", 2.09);
let tarifa_reterenta = new Calculadora("rete-renta", 1.5);
let iva = new Calculadora("iva-valor", 0.19);

tarifario.push(tarifa_normal, tarifa_especial1, tarifa_especial2, tarifa_especial3);

function iniciar_programa(){

  section_resultado.style.display = "none";
  section_reiniciar.style.display = "none";

  tarifario.forEach((tarifa) => {
    opcion_tarifa = `<input type="radio" name="tarifa" id=${tarifa.nombre} />
    <label for=${tarifa.nombre} class="boton-tarifa">${tarifa.valor}%</label>`

    section_tarifa.innerHTML += opcion_tarifa;
  })

  tarifa1 = document.getElementById("tarifa-estandard");
  tarifa2 = document.getElementById("tarifa-plana1");
  tarifa3 = document.getElementById("tarifa-plana2");
  tarifa4 = document.getElementById("tarifa-plana3");

  boton_tarifa.addEventListener("click", seleccion_tarifa);
  boton_reiniciar.addEventListener("click", reiniciar_calculadora);
  boton_reiniciar_iva.addEventListener("click", reiniciar_calculadora);
  boton_iva.addEventListener("click", ivaCalculador);
}


function seleccion_tarifa(){
valor_venta = document.getElementById("valor-venta").value;
rete_renta = document.getElementById("rete-renta");
rete_ica = document.getElementById("rete-ica").value;
    if (tarifa1.checked && rete_renta.checked){

        operacion = (valor_venta * tarifa_normal.valor / 100) + (valor_venta * tarifa_reterenta.valor / 100) + (valor_venta * rete_ica / 100);
        resultado = valor_venta - operacion;

        eleccion = tarifa_normal.valor;
        let valor_tarifa = valor_venta * tarifa_normal.valor / 100;
        let valor_reterenta = valor_venta * tarifa_reterenta.valor / 100;
        let valor_reteica = valor_venta * rete_ica / 100;
        mensaje_resultado(eleccion, valor_tarifa, valor_reterenta, valor_reteica);
      
    } else if (tarifa1.checked){

      operacion = (valor_venta * tarifa_normal.valor / 100) + (valor_venta * rete_ica / 100);
      resultado = valor_venta - operacion;

      eleccion = tarifa_normal.valor;
      let valor_tarifa = valor_venta * tarifa_normal.valor / 100;
      let valor_reterenta = 0;
      let valor_reteica = valor_venta * rete_ica / 100;
      mensaje_resultado(eleccion, valor_tarifa, valor_reterenta, valor_reteica);

    } else if (tarifa2.checked && rete_renta.checked){

      operacion = (valor_venta * tarifa_especial1.valor / 100) + (valor_venta * tarifa_reterenta.valor / 100) + (valor_venta * rete_ica / 100);
      resultado = (valor_venta - operacion) - 300;
      
      eleccion = tarifa_especial1.valor;
      let valor_tarifa = valor_venta * tarifa_especial1.valor / 100;
      let valor_reterenta = valor_venta * tarifa_reterenta.valor / 100;
      let valor_reteica = valor_venta * rete_ica / 100;
      mensaje_resultado(eleccion, valor_tarifa, valor_reterenta, valor_reteica);

    } else if (tarifa2.checked){

      operacion = (valor_venta * tarifa_especial1.valor / 100) + (valor_venta * rete_ica / 100);
      resultado = (valor_venta - operacion) - 300;

      eleccion = tarifa_especial1.valor;
      let valor_tarifa = valor_venta * tarifa_especial1.valor / 100;
      let valor_reterenta = 0;
      let valor_reteica = valor_venta * rete_ica / 100;
      mensaje_resultado(eleccion, valor_tarifa, valor_reterenta, valor_reteica);

    } else if (tarifa3.checked && rete_renta.checked){

      operacion = (valor_venta * tarifa_especial2.valor / 100) + (valor_venta * tarifa_reterenta.valor / 100) + (valor_venta * rete_ica / 100);
      resultado = (valor_venta - operacion) - 300;
      
      eleccion = tarifa_especial2.valor;
      let valor_tarifa = valor_venta * tarifa_especial2.valor / 100;
      let valor_reterenta = valor_venta * tarifa_reterenta.valor / 100;
      let valor_reteica = valor_venta * rete_ica / 100;
      mensaje_resultado(eleccion, valor_tarifa, valor_reterenta, valor_reteica);

    } else if (tarifa3.checked){

      operacion = (valor_venta * tarifa_especial2.valor / 100) + (valor_venta * rete_ica / 100);
      resultado = (valor_venta - operacion) - 300;

      eleccion = tarifa_especial2.valor;
      let valor_tarifa = valor_venta * tarifa_especial2.valor / 100;
      let valor_reterenta = 0;
      let valor_reteica = valor_venta * rete_ica / 100;
      mensaje_resultado(eleccion, valor_tarifa, valor_reterenta, valor_reteica);

    } else if (tarifa4.checked && rete_renta.checked){

      operacion = (valor_venta * tarifa_especial3.valor / 100) + (valor_venta * rete_ica / 100);
      resultado = (valor_venta - operacion) - 100;

      let valor_tarifa = valor_venta * tarifa_especial3.valor / 100;
      let valor_reterenta = valor_venta * tarifa_reterenta.valor / 100;
      let valor_reteica = valor_venta * rete_ica / 100;
      mensaje_resultado(eleccion, valor_tarifa, valor_reterenta, valor_reteica);

    } else if (tarifa4.checked){

      operacion = (valor_venta * tarifa_especial3.valor / 100) + (valor_venta * rete_ica / 100);
      resultado = (valor_venta - operacion) - 300;

      eleccion = tarifa_especial3.valor;
      let valor_tarifa = valor_venta * tarifa_especial3.valor / 100;
      let valor_reterenta = 0;
      let valor_reteica = valor_venta * rete_ica / 100;
      mensaje_resultado(eleccion, valor_tarifa, valor_reterenta, valor_reteica);
    
    } else{

      alert("Ingresa un valor y selecciona la tarifa y retención corresponciente")

      reiniciar_calculadora();
    }

    section_resultado.style.display = "block";
    section_reiniciar.style.display = "block";
    section_venta.style.display = "none";
    section_tarifa.style.display = "none";
    section_impuesto_reterenta.style.display = "none";
    section_impuesto_reteica.style.display = "none";
    titulo_tarifa.style.display = "none";
    diferencia_tarifa.style.display = "none";
    boton_calcular.style.display = "none";

    
  }

  function mensaje_resultado(eleccion, valor_tarifa, valor_reterenta, valor_reteica){

    let message = `<h2>Resultado con script incluido:</h2>

    <p>De acuerdo al valor de tus ventas, tarifa e impuestos vigentes, te comento que las deducciones se realizaron así:</p>
    <p>Valor de tus ventas: <strong>$${valor_venta}</strong></p>
    <p>Tarifa Bold del ${eleccion}% = <strong>-$${valor_tarifa.toFixed(2)}</strong></p>
    <p>ReteRenta del ${tarifa_reterenta.valor}% = <strong>-$${valor_reterenta}</strong></p>
    <p>ReteICA del ${rete_ica}% = <strong>-$${valor_reteica}</strong></p>
    <p>Total a transferir a tu cuenta bancaria: <strong>$${resultado.toLocaleString("es-CO")}</strong></p>`

    section_resultado.innerHTML = message;
}

function ivaCalculador() {
    let ventaspseNequi = document.getElementById("ventas-pseNequi").value;
    let valorIva = document.getElementById("valor-iva").value;
    let contenedor_respuesta = document.getElementById("contenedor-respuesta");

    const pago_terceros = ventaspseNequi - (valorIva / iva.valor);
    const base_gravable = ventaspseNequi - pago_terceros;
    const iva_resultado = (ventaspseNequi - pago_terceros) * iva.valor;

    let message = `
      <p>Pago a terceros sobre el valor ingresado: <strong>$${pago_terceros.toFixed(2)}</strong></p>
      <p>Base gravable, luego del pago a terceros: <strong>$${base_gravable.toFixed(2)}</strong></p>
      <p>IVA de la base gravable: <strong>$${iva_resultado.toFixed(2)}</strong></p>
      <h2>¡IMPORTANTE!</h2>
      <p>La operación antes realizada solamente encuentra la incognita que se tiene sobre el pago
      a terceros, de las ventas por PSE y Nequi, despejando la variable X con una formula matemática, pero es
      importante revisar los valores en los <strong>documentos oficiales</strong> emitidos por <strong>Bold</strong>, antes de enviar respuesta al cliente. </p>`

    contenedor_respuesta.innerHTML = message;
}
    

  function reiniciar_calculadora(){
    location.reload();
  }

window.addEventListener("load", iniciar_programa);


