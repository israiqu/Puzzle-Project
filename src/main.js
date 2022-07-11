    const imagenes = document.querySelectorAll(".imagen");
    const secciones = document.querySelectorAll(".seccion");

    imagenes.forEach((imagen) => {
    imagen.addEventListener("dragstart", (event) => {
        imagen.classList.add("dragging");
        event.dataTransfer.setData("id", imagen.id);
    });

    imagen.addEventListener("dragend", () => {
        imagen.classList.remove("dragging");
    });
    });

    secciones.forEach((seccion) => {
    seccion.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    });

    seccion.addEventListener("drop", (event) => {
        const id_imagen = event.dataTransfer.getData("id");
        const imagen = document.getElementById(id_imagen);
        seccion.appendChild(imagen);
    });
    });

    const papelera = document.querySelector(".papelera");

    papelera.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    });

    papelera.addEventListener("drop", (event) => {
    const id_imagen = event.dataTransfer.getData("id");
    document.getElementById(id_imagen).remove();
    });
