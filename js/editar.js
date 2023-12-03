console.log(location.search) // lee los argumentos pasados a este formulario
var id = location.search.substr(4)
console.log(id)
const {
    createApp
} = Vue
createApp({
    data() {
        return {
            id:0,
            isbn:0,
            titulo:"",
            autor:"",
            categoria:"",
            editorial:"",
            imagen:"",
            precio:0,
            cantidad:0,

            //url:'http://127.0.0.1:5000/productos/' + id, //ruta local
            url: 'https://marianus.pythonanywhere.com/api/productos/' + id, //ruta pythonanywhere
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id
                    this.isbn  = data.isbn
                    this.titulo = data.titulo
                    this.autor = data.autor
                    this.categoria = data.categoria
                    this.editorial = data.editorial
                    this.imagen = data.imagen
                    this.precio = data.precio
                    this.cantidad = data.cantidad
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            let producto = {
                isbn: this.isbn,
                titulo: this.titulo,
                autor: this.autor,
                categoria: this.categoria,
                editorial: this.editorial,
                imagen: this.imagen,
                precio: this.precio,
                cantidad: this.cantidad
            }
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function() {
                    alert("Registro modificado")
                    // window.location.href = "./productos.html";
                    window.location.href = "../pages/listar.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')