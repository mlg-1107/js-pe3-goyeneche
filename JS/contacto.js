// Mostrar formulario de contacto
const formularioDiv = document.getElementById('formularioContacto');
formularioDiv.classList.add('visible');
crearFormulario();


// Crear el formulario de contacto
function crearFormulario() {
const formularioContainer = document.getElementById('formulario');

// Crear el formulario
const formulario = document.createElement('form');
formulario.setAttribute('id', 'contactoForm');

// Campo Nombre y Apellido
const nombreDiv = document.createElement('div');
nombreDiv.classList.add('form-group');
const nombreLabel = document.createElement('label');
nombreLabel.setAttribute('for', 'nombre');
nombreLabel.textContent = 'Nombre y Apellido:';
const nombreInput = document.createElement('input');
nombreInput.setAttribute('type', 'text');
nombreInput.setAttribute('id', 'nombre');
nombreInput.setAttribute('name', 'nombre');
nombreInput.setAttribute('required', 'true');
nombreDiv.appendChild(nombreLabel);
nombreDiv.appendChild(nombreInput);

// Campo Correo Electrónico
const correoDiv = document.createElement('div');
correoDiv.classList.add('form-group');
const correoLabel = document.createElement('label');
correoLabel.setAttribute('for', 'correo');
correoLabel.textContent = 'Correo Electrónico:';
const correoInput = document.createElement('input');
correoInput.setAttribute('type', 'email');
correoInput.setAttribute('id', 'correo');
correoInput.setAttribute('name', 'correo');
correoInput.setAttribute('required', 'true');
correoDiv.appendChild(correoLabel);
correoDiv.appendChild(correoInput);

// Campo Mensaje
const mensajeDiv = document.createElement('div');
mensajeDiv.classList.add('form-group');
const mensajeLabel = document.createElement('label');
mensajeLabel.setAttribute('for', 'mensaje');
mensajeLabel.textContent = 'Mensaje:';
const mensajeTextarea = document.createElement('textarea');
mensajeTextarea.setAttribute('id', 'mensaje');
mensajeTextarea.setAttribute('name', 'mensaje');
mensajeTextarea.setAttribute('rows', '4');
mensajeTextarea.setAttribute('required', 'true');
mensajeDiv.appendChild(mensajeLabel);
mensajeDiv.appendChild(mensajeTextarea);

// Botón Enviar
const submitDiv = document.createElement('div');
const submitButton = document.createElement('button');
submitButton.textContent = 'Enviar';
submitButton.setAttribute('type', 'submit');
submitDiv.appendChild(submitButton);

// Agregar todo al formulario
formulario.appendChild(nombreDiv);
formulario.appendChild(correoDiv);
formulario.appendChild(mensajeDiv);
formulario.appendChild(submitDiv);

// Agregar formulario al contenedor
formularioContainer.appendChild(formulario);

// Evento submit
formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  const nombre = nombreInput.value;
  const correo = correoInput.value;
  const mensaje = mensajeTextarea.value;
  if (nombre && correo && mensaje) {
    alert(`Formulario enviado correctamente. Nos pondremos en contacto contigo a ${correo}.`);
  } else {
    alert("Por favor, completa todos los campos.");
  }
});
}