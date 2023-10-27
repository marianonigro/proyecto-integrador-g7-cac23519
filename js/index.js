// Contenedores de tarjetas para las distintas secciones
const contenedorTarjetasLibros = document.getElementById("productos-libros");
const contenedorTarjetasComics = document.getElementById("productos-comics");
const contenedorTarjetasManga = document.getElementById("productos-manga");
const contenedorTarjetasMasVendidos = document.getElementById("productos-mas-vendidos");

// Define categorías disponibles
const categoríasDisponibles = [
  "Ficción",
  "Meditación",
  "Temas Musicales Biografías",
  "Ficción Moderna",
  "Filosofía",
  "Política",
  "Personajes Históricos",
  "Novelas de Amor",
  "Deporte",
  "Novela Romántica",
  "Desarrollo Personal",
  "Relatos de Aventuras Infantil",
  "Motivación Autoestima",
  "Ficción Infantil",
  "Romance",
  "Manga",
  "Comics"
];

function crearTarjetasProductosPorCategoria(productos, categoriaFiltrada, contenedor, cantidadElementos) {
  contenedor.innerHTML = ''; // Limpiamos el contenedor

  let productosFiltrados = productos;
  
  // Filtra los productos por categoría si se especifica una categoría
  if (categoriaFiltrada) {
    productosFiltrados = productos.filter(producto => producto.categoria === categoriaFiltrada);
  }

  // Muestra los productos filtrados en el contenedor
  for (let i = 0; i < cantidadElementos && i < productosFiltrados.length; i++) {
    const producto = productosFiltrados[i];

    const nuevoBook = document.createElement("div");
    nuevoBook.classList = "item";
    nuevoBook.innerHTML = `
      <img class="img-item" src="${producto.imagen}" alt="${producto.titulo}">
      <h4 class="titulo-item">${producto.titulo}</h4>
      <p class="autor-item">Autor: ${producto.autor}</p>
      <p class="categoria-item">Categoría: ${producto.categoria}</p>
      <p class="editorial-item">Editorial: ${producto.editorial}</p>
      <p class="isbn-item">Isbn: ${producto.isbn}</p>
      <span class="precio-item">$ ${producto.precio.toFixed(2)}</span>
      <button class="boton-item">Agregar al carrito</button>
    `;
    contenedor.appendChild(nuevoBook);
    nuevoBook.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto));
  }
}

// Muestra los productos por categoría filtrada en cada contenedor y por cantidad
crearTarjetasProductosPorCategoria(data_bookshop, "", contenedorTarjetasLibros, 15); // Muestra todos los libros (sin filtrar por categoría)
crearTarjetasProductosPorCategoria(data_bookshop, "Comics", contenedorTarjetasComics, 5); // Filtra por categoría "Comics"
crearTarjetasProductosPorCategoria(data_bookshop, "Manga", contenedorTarjetasManga, 5); // Filtra por categoría "Manga"
crearTarjetasProductosPorCategoria(data_bookshop, "", contenedorTarjetasMasVendidos, 5); // Muestra los productos más vendidos (sin filtrar por categoría)

// Botón Ir Arriba
document.getElementById("boton-arriba").addEventListener("click", scrollUp);

function scrollUp() {
    let currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.scrollTo(0, 0);
        botonArriba.style.transform = "scale(0)";
    }
}

botonArriba = document.getElementById("boton-arriba");
window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 100) {
        botonArriba.style.transform = "scale(1)";
    } else {
        botonArriba.style.transform = "scale(0)";
    }
}

// Selecciona el menú humburger
const toggle = document.getElementById("toggle");
// Selecciona el nav
const nav = document.getElementById("nav");
// Seleccione todos los li en .navbar-nav
const ul = document.querySelectorAll(".navbar-nav > li");

// Mostrar todas las listas en nav
const handleClick = () => {
    console.log("click");
    nav.classList.toggle("active");
};
toggle.addEventListener("click", handleClick);

// Elimina el menú al hacer clic en cada list
ul.forEach((li) => {
    li.onclick = function () {
        nav.classList.remove("active");
    };
});
