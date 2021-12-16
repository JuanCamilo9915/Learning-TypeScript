//Seleccionando el Formulario del HTML-DOM
const formulario: HTMLFormElement = document.getElementById('form-gastos-personales') as HTMLFormElement;
//Instanciando formData
let formUsu = new FormData(formulario);

//Recibiendo los Datos
function recibirDatos() {
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        alert(`detalle: ${formUsu.get('detalle')},
        Tipo Detalle: ${formUsu.get('option')},
        Valor: ${formUsu.get('valor')}`);
        //console.log(`Tipo Detalle: ${tipoDetalle.value as number}`);
    });
}