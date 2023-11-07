let section_resultado = document.getElementById("resultado-programa");
let section_reiniciar = document.getElementById("reiniciar");
let boton_tarifa = document.getElementById("boton-calcular");
let boton_reiniciar = document.getElementById("boton-reiniciar");


let section_venta = document.getElementById("seleccionar-valor-venta");
let section_tarifa = document.getElementById("seleccionar-tarifa");
let section_impuesto_reterenta = document.getElementById("seleccionar-impuesto-reterenta");
let section_impuesto_reteica = document.getElementById("seleccionar-impuesto-reteica");
let titulo_tarifa = document.getElementById("titulo-tarifa");
let boton_calcular = document.getElementById("boton-calcular");
let diferencia_tarifa = document.getElementById("titulo-diferencia-tarifa");


let tarifario = [];
let tarifas = [];
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


  tarifas.push(tarifa1, tarifa2, tarifa3, tarifa4);

  
  boton_tarifa.addEventListener("click", seleccion_tarifa);
  boton_reiniciar.addEventListener("click", reiniciar_calculadora);
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
      let valor_reteica = 0;
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
      let valor_reteica = 0;
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
      let valor_reteica = 0;
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
      let valor_reteica = 0;
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

    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');


    h2.textContent = "Resultado con script incluido:";
    p.textContent = "De acuerdo al valor de tus ventas, tarifa e impuestos vigentes, te comento que las deducciones se realizaron así:"

    p2.textContent= `Valor de tus ventas: $${valor_venta}`
    p3.textContent= `Tarifa Bold del ${eleccion}% = -$${valor_tarifa}`
    p4.textContent= `ReteRenta del ${tarifa_reterenta.valor}% = -$${valor_reterenta}`
    p5.textContent= `ReteICA del (${rete_ica}%) = -$${valor_reteica}`
    p6.textContent= `Total a transferir a tu cuenta bancaria: $${resultado}`
    

    section_resultado.appendChild(h2);
    section_resultado.appendChild(p);
    section_resultado.appendChild(p2);
    section_resultado.appendChild(p3);
    section_resultado.appendChild(p4);
    section_resultado.appendChild(p5);
    section_resultado.appendChild(p6);
  
}
    

  function reiniciar_calculadora(){
    location.reload();
  }

window.addEventListener("load", iniciar_programa);


