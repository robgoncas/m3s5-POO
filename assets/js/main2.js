// Objeto base (abstracción y encapsulamiento)
//aplicacion de POO formato ecma5
//var objVacio = {};
//Clase
var publicacion = {
    //Atributos
    
    titulo: "",
    autor: "",
    
    // Método para mostrar información
    mostrarInfo: function() {
        return `${this.titulo} por ${this.autor}`;
    }
};


// Objeto derivado para libros (herencia)
var libro = Object.create(publicacion);
libro.numPaginas = 0

//Polimorfismo (sobreescribiendo el metodo)
// Sobrescribir el método para libros
libro.mostrarInfo = function() {
    return `${publicacion.mostrarInfo.call(this)}, ${this.numPaginas} páginas`;
};

// Objeto derivado para revistas (herencia)
var revista = Object.create(publicacion);
revista.fecha = "";

// Sobrescribir el método para revistas
revista.mostrarInfo = function() {
    return `${publicacion.mostrarInfo.call(this)}, Fecha: ${this.fecha}`;
};

// Polimorfismo en acción
function mostrarDetalles(publicacion) {
    return publicacion.mostrarInfo();
}

// Crear instancias y mostrar resultados
var libro1 = Object.create(libro);
libro1.titulo = "Cien años de soledad";
libro1.autor = "Gabriel García Márquez";
libro1.numPaginas = 417;

var revista1 = Object.create(revista);
revista1.titulo = "National Geographic";
revista1.autor = "Varios";
revista1.fecha = "Agosto 2024";

// Mostrar resultados en la página HTML
document.getElementById('output').innerHTML = `
    <div class="alert alert-info" role="alert">
        <h5 class="alert-heading">Detalles de Publicaciones</h5>
        <p><strong>Libro:</strong> ${mostrarDetalles(libro1)}</p>
        <p><strong>Revista:</strong> ${mostrarDetalles(revista1)}</p>
    </div>
`;
