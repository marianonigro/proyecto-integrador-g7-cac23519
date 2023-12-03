// URL de la API que proporciona los datos
const apiUrl = 'https://marianus.pythonanywhere.com/api/productos'; // Reemplaza esto con la URL real de tu API
let data_bookshop;

// Función para cargar los datos desde la API
async function cargarDatosDesdeApi() {
  try {
    const response = await fetch(apiUrl);
    data_bookshop = await response.json();

    // Muestra los productos por categoría filtrada en cada contenedor y por cantidad
    crearTarjetasProductosPorCategoria(data_bookshop, "", contenedorTarjetasLibros, 15); // Muestra todos los libros (sin filtrar por categoría)
    crearTarjetasProductosPorCategoria(data_bookshop, "Comics", contenedorTarjetasComics, 5); // Filtra por categoría "Comics"
    crearTarjetasProductosPorCategoria(data_bookshop, "Manga", contenedorTarjetasManga, 5); // Filtra por categoría "Manga"
    crearTarjetasProductosPorCategoria(data_bookshop, "", contenedorTarjetasMasVendidos, 5); // Muestra los productos más vendidos (sin filtrar por categoría)

  } catch (error) {
    console.error('Error al cargar datos desde la API:', error);
  }
}

// Llamada a la función para cargar los datos al cargar la página
cargarDatosDesdeApi();

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


// Botón Ir Arriba
document.addEventListener("DOMContentLoaded", function () {
  const botonArriba = document.getElementById("boton-arriba");

  function scrollUp() {
    let currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
      window.scrollTo(0, 0);
      botonArriba.style.transform = "scale(0)";
    }
  }

  window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 100) {
      botonArriba.style.transform = "scale(1)";
    } else {
      botonArriba.style.transform = "scale(0)";
    }
  }

  // Verifica que 'botonArriba' no sea nulo antes de añadir el event listener
  if (botonArriba) {
    botonArriba.addEventListener("click", scrollUp);
  }
});


// Selecciona el menú hamburger
const toggle = document.getElementById("toggle");
// Selecciona el nav
const nav = document.getElementById("nav");
// Seleccione todos los li en .navbar-na
const ul = document.querySelectorAll(".navbar-na > li");

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
