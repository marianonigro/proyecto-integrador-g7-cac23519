// Validación de formulario
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validación de campos obligatorios
        if (nombre === "") {
            alert("Por favor, ingresa tu nombre.");
            return;
        }

        if (email === "") {
            alert("Por favor, ingresa tu correo electrónico.");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        if (mensaje === "") {
            alert("Por favor, ingresa un mensaje.");
            return;
        }

        // Si la validación es correcta se envía al servicio externo de correo
        // fetch('url_del_servicio', {
        //     method: 'POST',
        //     body: JSON.stringify({ nombre, email, mensaje }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response => {
        //     if (response.ok) {
        //         alert('Correo enviado exitosamente');
        //         form.reset();
        //     } else {
        //         alert('Hubo un problema al enviar el correo');
        //     }
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        //     alert('Hubo un problema al enviar el correo');
        // });

        // alert("Correo enviado exitosamente");
        // form.reset();
    });

    // Función expresión regular para validar el formato de correo electrónico
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
});

// Formulario para envío pre-configurado

const $form = document.querySelector('#contac-form')
const $botonMailto = document.querySelector('#envio-mail')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('nombre'))
    $botonMailto.setAttribute('href', `mailto:marianus@gmail.com?subject=${form.get('nombre')} [ ${form.get('email')} ]&body=${form.get('mensaje')}`)
    $botonMailto.click()
}