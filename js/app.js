//Variables

const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregar un curso presionando "agregar al carrito"
    listaCursos.addEventListener("click", agregarCurso); 
}

//Funciones

function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
        
    }
    
}

//Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {

    //Crear objeto con el contenido del curso
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector("p.precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }
    console.log(infoCurso);

    //Agrega elementos al arreglo de carritos
    articulosCarrito = [...articulosCarrito, infoCurso];
    carritoHTML(infoCurso);
    console.log(articulosCarrito);
}


//Muestra el carrito de compras en el HTML

function carritoHTML(curso) {

    //Antes de crear el HTML hay que limpiarlo
    limpiarHTML();

    //Recorre el carrito y genera el HTML

    articulosCarrito.forEach( curso =>{
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>
        <img src="${imagen}" width="100"/>
        </td>
        <td>
        ${titulo}
        </td>
        <td>
        ${precio}
        </td>
        <td>
        ${cantidad}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
        `
        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

//Elimina los cursos del tbody
function limpiarHTML() {
    //Forma lenta
    // contenedorCarrito.innerHTML = "";

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}