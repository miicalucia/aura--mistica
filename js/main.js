class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const sahumador = new Producto(1, "Sahumador", 1500, "assets/sahumador.jpg");
const sahumerio = new Producto(2, "Sahumerio", 500, "assets/sahumerios-producto.jpg");
const bombita = new Producto(3, "Bombitas", 1500, "assets/bombas.jpg");
const portaSahumerio = new Producto(4, "Porta Sahumerio", 1500, "assets/porta-sahumerio.jpg");
const conos = new Producto(5, "Conos", 1500, "assets/conitos.jpg");
const hornillos = new Producto(6, "Hornillos", 1500, "assets/hornillos.jpg");
const velas = new Producto(7, "Velas", 1500, "assets/velas.jpg");

const productos = [sahumador, sahumerio, bombita, portaSahumerio, conos, hornillos, velas];

let carrito = [];

const contenedorProductos = document.getElementById("contenedorProductos");

const mostrarProductos = () => {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                            <div class="card">
                            <img class="card-img-tom imgProductos" src="${producto.img}" alt="${producto.nombre}">
                            <div>
                            <h3>${producto.nombre}</h3>
                            <p>${producto.precio}</p>
                            <button class="btn colorBoton" id="boton${producto.id}"> Agregar al Carrito </button>
                            </div>
                            </div>`
        contenedorProductos.appendChild(card);

        
    })
}