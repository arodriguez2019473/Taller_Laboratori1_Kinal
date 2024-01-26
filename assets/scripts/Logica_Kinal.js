function mostrarInformacion() {
    var infoDetallada = document.getElementById("info-detallada");
    var botonMostrar = document.querySelector("#informacion button");

    if (infoDetallada.style.display === "none") {
        infoDetallada.style.display = "block";
        botonMostrar.textContent = "Mostrar menos";
    } else {
        infoDetallada.style.display = "none";
        botonMostrar.textContent = "Mostrar más";
    }
}


function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;

    if (nombre === "" || email === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }

    alert("Formulario enviado correctamente. Gracias por contactarnos.");
    return true;
}



