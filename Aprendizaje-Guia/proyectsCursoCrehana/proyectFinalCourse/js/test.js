"use strict";
//Seleccionando el Formulario del HTML-DOM
var formulario = document.getElementById('form-gastos-personales');
//Instanciando formData
var formUsu = new FormData(formulario);
//Recibiendo los Datos
function recibirDatos() {
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        alert("detalle: ".concat(formUsu.get('detalle'), ",\n        Tipo Detalle: ").concat(formUsu.get('option'), ",\n        Valor: ").concat(formUsu.get('valor')));
        //console.log(`Tipo Detalle: ${tipoDetalle.value as number}`);
    });
}
