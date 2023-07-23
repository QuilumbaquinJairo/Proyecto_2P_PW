document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateForm()) {
      // Enviar el formulario utilizando el método GET
      const formData = new FormData(form);
      const queryString = new URLSearchParams(formData).toString();
      const url = form.getAttribute('action');

      // Aquí, normalmente enviarías los datos del formulario al servidor
      // usando fetch o una librería para manejar peticiones HTTP.
      // Como ejemplo, aquí mostraremos una notificación de éxito.
      showNotification('Información enviada correctamente');

      // Limpia los campos del formulario después de enviarlo
      form.reset();
    }
  });

  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('name-error');

  nameInput.addEventListener('input', function () {
    const nameValue = nameInput.value.trim();
    const nameRegex = /^[a-zA-Z\s]+$/; // Solo letras y espacios

    if (!nameRegex.test(nameValue)) {
      nameError.textContent = 'El campo Nombre solo debe contener letras y espacios';
      nameInput.classList.add('error');
    } else {
      nameError.textContent = '';
      nameInput.classList.remove('error');
    }
  });

  function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification'); // Agrega esta línea
    notification.textContent = message;
    document.body.appendChild(notification);

    // Mostrar la notificación durante 3 segundos y luego desaparecer
    setTimeout(function () {
      document.body.removeChild(notification);
    }, 3000);
  }
});
