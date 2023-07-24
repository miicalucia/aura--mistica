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
const hornillos = new Producto(6, "Hornillos", 1500, "assets/hornillos.jpeg");
const velas = new Producto(7, "Velas", 1500, "assets/velas.jpg");

const productos = [sahumador, sahumerio, bombita, portaSahumerio, conos, hornillos, velas];

let carrito = [];

const contenedorProductos = document.getElementById("contenedorProductos");

//Funcion para mostrar productos

const mostrarProductos = () => {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
                            <div clas="card">
                                <img class="class-img-tom imgProductos" src="${producto.img}" alt"${producto.nombre}">
                                <div class="card-body">
                                    <h3>${producto.nombre}</h3>
                                    <p>${producto.precio}</p>
                                    <button class="btn colorBoton" id="boton${producto.id}">Agregar al carrito</button>
                                </div>
                            </div>`
    contenedorProductos.appendChild(card);

    //Agregar productos al carrito
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })
    })
}

mostrarProductos();