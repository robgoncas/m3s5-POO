// Clase base (abstracción y encapsulamiento)
class Publicacion {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    // Método que muestra información
    mostrarInfo() {
        return `${this.titulo} por ${this.autor}`;
    }
}

// Clase hija (herencia)
class Libro extends Publicacion {
    constructor(titulo, autor, numPaginas) {
        super(titulo, autor); // Llama al constructor de la clase base
        this.numPaginas = numPaginas;
    }

    // Método adicional para libros
    mostrarInfo() {
        return `${super.mostrarInfo()}, ${this.numPaginas} páginas`;
    }
}

// Otra clase hija (herencia)
class Revista extends Publicacion {
    constructor(titulo, autor, fecha) {
        super(titulo, autor);
        this.fecha = fecha;
    }

    // Método adicional para revistas
    mostrarInfo() {
        return `${super.mostrarInfo()}, Fecha: ${this.fecha}`;
    }
}

// Polimorfismo en acción
function mostrarDetalles(publicacion) {
    return publicacion.mostrarInfo();
}

// Crear instancias y mostrar resultados
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 417);
const libro2 = new Libro("Como agua para chocolate","Laura Esquivel","Septiembre 1970");
const revista1 = new Revista("National Geographic", "Varios", "Agosto 2024");

document.getElementById('output').innerHTML = `
    <div class="alert alert-info" role="alert">
        <h5 class="alert-heading">Detalles de Publicaciones</h5>
        <p><strong>Libro:</strong> ${mostrarDetalles(libro1)}</p>
        <p><strong>Libro:</strong> ${mostrarDetalles(libro2)}</p>
        <p><strong>Revista:</strong> ${mostrarDetalles(revista1)}</p>
    </div>
`;
