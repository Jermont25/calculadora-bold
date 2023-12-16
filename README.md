# Calculadora Bold

Este es un proyecto de una calculadora para realizar cálculos de las tarifas y facturación de Bold.co SAS, empresa donde trabajo.

## Descripción

La calculadora Bold es una herramienta diseñada para ayudar a calcular los costos y las deducciones relacionadas con las tarifas de Bold, incluyendo impuestos y retenciones, además cuenta con un apartado que permite encontrar el pago a terceros de la comisión cobrada por ventas desde Nequi o PSE, hayando así el valor reportado en la factura de comisión por concepto de IVA.

## Características

- Cálculo de tarifas estándar y especiales de Bold.
- Manejo de retenciones de renta (ReteRenta) e impuesto de industria y comercio (ReteICA).
- Calculadora para el Impuesto al Valor Agregado (IVA) para ventas por PSE y Nequi.

## Instalación

1. Abre el enlace (https://jermont25.github.io/calculadora-bold/index.html) en tu navegador.

## Uso Calculadora Tarifa

1. Ingresa el valor de las ventas y selecciona la tarifa correspondiente.
2. Si es necesario, indica las retenciones de renta y/o ReteICA.
3. Haz clic en "Calcular" para obtener los resultados.

## Uso Calculadora IVA
1. Ingresa el valor de las ventas realizadas por PSE o Nequi, que encuentras en el reporte de ventas en formato Excel.
2. Ingresa el valor del IVA que se reporta en la factura de comisión transaccional, recuerda que la factura y el reporte deben ser del mismo mes.
3. Haz clic en "Calcular" para obtener los resultados.

**Importante:** Asegúrate de ingresar los valores de manera correcta para obtener resultados precisos y no olvides comparar los resultados con los valores reportados, sobre todo en la factura de comisión transaccional, ya que este código solo haya el valor del pago a terceros, sobre el valor de las ventas que ingreses, pero lo hace despejando a X como una variable a la que se le desea hayar el resultado.

La operación matemática es: *valor_pago_a_terceros = valor_de_las_ventas - (IVA_de_la_factura / 19%)*
   
## Contribución

Si quieres contribuir al proyecto, sigue estos pasos:

1. Haz un "fork" del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y confirma (`git commit -am 'Agrega una nueva funcionalidad'`).
4. Empuja tus cambios a la rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

## Créditos

Este proyecto fue desarrollado por [Jerson Uribe](https://github.com/Jermont25).

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE`
