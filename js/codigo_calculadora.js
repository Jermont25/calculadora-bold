const section_venta = document.getElementById("seleccionar-valor-venta");
const section_tarifa = document.getElementById("seleccionar-tarifa");
const section_impuesto_reterenta = document.getElementById("seleccionar-impuesto-reterenta");
const section_impuesto_reteica = document.getElementById("seleccionar-impuesto-reteica");
const titulo_tarifa = document.getElementById("titulo-tarifa");
const boton_calcular = document.getElementById("boton-calcular");
const boton_tarifa = document.getElementById("boton-calcular");
const section_reiniciar = document.getElementById("reiniciar");
const boton_reiniciar = document.getElementById("boton-reiniciar-tarifa");
const diferencia_tarifa = document.getElementById("titulo-diferencia-tarifa");
const section_resultado = document.getElementById("resultado-programa");


const boton_reiniciar_iva = document.getElementById("boton-reiniciar-iva");
const boton_iva = document.getElementById("boton-iva");
const contenedor_respuesta = document.getElementById("contenedor-respuesta");
const section_comision = document.getElementById("section-comision");
const section_iva = document.getElementById("section-iva");
const script = document.getElementById("template");
const link_template = document.getElementById("link-template");
const generateScript = document.getElementById("generate-template");

let tarifario = [];
let opcion_tarifa;
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
let mensajes;

let ventaspseNequi;
let valorIva;
let pago_terceros;
let base_gravable;
let iva_resultado;
let valor_neto;


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
/* let iva = new Calculadora("iva-valor", 0.19); */

tarifario.push(tarifa_normal, tarifa_especial1, tarifa_especial2, tarifa_especial3);

function iniciar_programa(){

  section_resultado.style.display = "none";
  section_reiniciar.style.display = "none";
  script.style.display = "none";
  link_template.style.display = "none";

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
  generateScript.addEventListener('click', templateMessage);

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
    ventaspseNequi = document.getElementById("ventas-pseNequi").value;
    valorIva = document.getElementById("valor-iva").value;
    
    base_gravable = valorIva / 0.19;
    valor_neto = base_gravable * 1.19;
    pago_terceros = ventaspseNequi - valor_neto;
    iva_resultado = base_gravable * 0.19;

    let message = `
      <p>Pago a terceros sobre el valor de la comisión ingresada: <strong>$${pago_terceros.toFixed(2)}</strong></p>
      <p>Comisión Bold, luego del pago a terceros con IVA incluido: <strong>$${valor_neto.toFixed(2)}</strong></p>
      <p>Base gravable de la comisión Bold: <strong>$${base_gravable.toFixed(2)}</strong></p>
      <p>IVA de la base gravable: <strong>$${iva_resultado.toFixed(2)}</strong></p>
      <h2>¡IMPORTANTE!</h2>
      <p>Pendiente</p>`

    contenedor_respuesta.innerHTML = message;

    link_template.style.display = "block";
}

function templateMessage () {

  section_comision.style.display = "none";
  section_iva.style.display = "none";
  contenedor_respuesta.style.display = "none";
  boton_iva.style.display = "none";
  generateScript.style.display = "none";
  script.style.display = "block";


  let messageScript = ` <h2><strong>Script:</strong></h2>
    
    <p>Te confirmo como se calcula el IVA sobre la factura de comisión transaccional:</P>

    <p>Las comisiones que cobra Bold en sus canales de pago a través del datáfono y el link de pago con tarjeta, serán tratadas como excluidas, por tratarse de comisiones por la utilización de tarjetas de crédito y débito, es decir, no se deduce IVA sobre dichas transacciones.
    Las comisiones que cobra Bold por ventas por link de pago, a través de PSE, y por medio de Nequi, serán gravadas con IVA.</p>
   
   <p>En este orden de ideas y tomando como referencia las ventas del mes de (insertar mes), la factura se deduce de la siguiente manera:</p>
       <ul>
           <li>Comisión Bold: <strong>$${ventaspseNequi}</strong></li>
           <li>Pagos a terceros: <strong>$${pago_terceros.toFixed(2)}</strong></li>
           <li>Ganancia neta de Bold: <strong>$${base_gravable.toFixed(2)}</strong></li>
           <li>IVA: <strong>$${iva_resultado.toFixed(2)}</strong></li>
       </ul>
   <p>Por lo cual, sobre la ganancia neta de Bold, de tus ventas por medio de (insertar PSE o Nequi), se dedujo el IVA por valor de $${iva_resultado.toFixed(2)}, que es el mismo valor evidencias en la factura de comisión transaccional.</p>
   <p><strong>Nota:</strong> Los valores antes descritos pertenecen a las ventas hechas por medio de PSE y Nequi, no están incluidas las ventas con tarjeta de crédito o débito.</p>`

   script.innerHTML = messageScript;
}

  function reiniciar_calculadora(){
    location.reload();
  }

window.addEventListener("load", iniciar_programa);


