//NAVBAR

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const items = document.querySelector("#items");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

items.addEventListener("click", () => {
    nav.classList.remove("visible");
})

//CARROUSEL

const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

punto.forEach( ( cadaPunto , i ) => {
    punto[i].addEventListener('click', () => {
        
        let posicion = i;
        let operacion = posicion * -33;

        grande.style.transform = `translateX(${ operacion }%)`;

        punto.forEach( ( cadaPunto , i)  => {
            punto[i].classList.remove('activo');
        })
        punto[i].classList.add('activo');

    })
})

//SECCION PRODUCTOS

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
        card.innerHTML = `
                            <div class="card">
                                <img class="imgProductos" src="${producto.img}" alt"${producto.nombre}">
                                <div class="cuerpoCard">
                                    <h3>${producto.nombre}</h3>
                                    <p>$${producto.precio}</p>
                                    <button id="boton${producto.id}">Agregar al carrito</button>
                                </div>
                            </div>`
        contenedorProductos.appendChild(card);

        //Agregar productos al carrito 
        //y Toastify

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id)
            Toastify({
                text: "Producto agregado",
                duration: 3000,
                gravity: "bottom",
                offset: {
                    x: 100,
                    y: 10
                },
                style: {
                    background: "#c8add9",
                    color: "#52008d",
                    opacity: 10,
                },
                }).showToast();;
        })
    })
}

mostrarProductos();

//Función agregar al carrito

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }

    calcularTotal();
}

//Mostrar el carrito de compras

const verCarrito = document.getElementById("verCarrito");
const contenedorCarrito = document.getElementById("contenedorCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

//Función para mostrar carrito:

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const cardCarrito = document.createElement("div");
        cardCarrito.innerHTML = `
                        <div class="cardCarrito">
                            <img class="imgCarrito" src="${producto.img}" alt"${producto.nombre}">
                            <div class="cuerpoCard">
                                <h3>${producto.nombre}</h3>
                                <p>$${producto.precio}</p>
                                <p>${producto.cantidad}</p>
                                <button id="eliminar${producto.id}"><span class="material-symbols-outlined">
                                delete
                                </span></button>
                            </div>
                        </div>
                        `
        ;
        contenedorCarrito.appendChild(cardCarrito);

        //Eliminar productos del carrito:
        const botonCarrito = document.getElementById(`eliminar${producto.id}`);
        botonCarrito.id = "botonCarrito";
        botonCarrito.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}

//Función que elimina producto del carrito

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    let indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();
}

//Vaciar carrito

const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    eliminarTodo();
})

//Funcion eliminar Todo 

const eliminarTodo = () => {
    carrito = [];
    mostrarCarrito();
}

//Muestro mensaje con el total de la compra

const total = document.getElementById("total");

const calcularTotal = () => {
   // let envioGratis = 5000;
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total: $${totalCompra}`;
}
