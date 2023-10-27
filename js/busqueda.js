// Función para realizar la búsqueda insensible a acentos, mayúsculas y minúsculas
function buscarProductos(query) {
    // Normalizar y convertir la consulta a minúsculas para que sea insensible a acentos, mayúsculas y minúsculas
    const queryNormalized = query.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  
    // Filtrar los productos que coinciden con la consulta
    const resultados = data_bookshop.filter((producto) => {
        // Normalizar y convertir el texto del producto a minúsculas para la comparación
        const tituloNormalized = producto.titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const autorNormalized = producto.autor.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const editorialNormalized = producto.editorial.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const isbnNormalized = producto.isbn.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        // Comprobar si la consulta se encuentra en el título, autor, editorial o ISBN
        return (
            tituloNormalized.includes(queryNormalized) ||
            autorNormalized.includes(queryNormalized) ||
            editorialNormalized.includes(queryNormalized) ||
            isbnNormalized.includes(queryNormalized)
        );
    });
  
    return resultados;
}

// Función para mostrar los resultados en la página
function mostrarResultados(resultados) {
    const resultadoContainer = document.getElementById("resultados");
  
    // Limpia los resultados anteriores
    resultadoContainer.innerHTML = "";
  
    if (resultados.length === 0) {
        resultadoContainer.textContent = "No se encontraron resultados.";
    } else {
        resultados.forEach((producto) => {
            // Crea un elemento para mostrar el producto
            const elementoProducto = document.createElement("div");
            elementoProducto.classList.add("item");
            elementoProducto.innerHTML = `
                        <img class="img-item" src="${producto.imagen}" alt="${producto.titulo}">
                        <h4 class="titulo-item">${producto.titulo}</h4>
                        <p class="autor-item">Autor: ${producto.autor}</p>
                        <p class="categoria-item">Categoría: ${producto.categoria}</p>
                        <p class="editorial-item">Editorial: ${producto.editorial}</p>
                        <p class="isbn-item">Isbn: ${producto.isbn}</p>
                        <span class="precio-item">$ ${producto.precio.toFixed(2)}</span>
                        <button class="boton-item">Agregar al carrito</button>
            `;
  
            // Agrega el producto al contenedor de resultados
            resultadoContainer.appendChild(elementoProducto);
        });
    }
}

// Escuchar el evento de búsqueda en el formulario
const formularioBusqueda = document.querySelector(".busqueda");
formularioBusqueda.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita que se recargue la página

    const busquedaInput = document.getElementById("busqueda");
    const query = busquedaInput.value;

    const resultados = buscarProductos(query);

    // Muestra los resultados
    mostrarResultados(resultados);

    // Espera 100ms para asegurar que los resultados se han renderizado antes de hacer scroll
    await new Promise(resolve => setTimeout(resolve, 100));

    // Hace scroll hacia la sección de resultados
    document.getElementById("resultado-busqueda").scrollIntoView({ behavior: 'smooth' });
});