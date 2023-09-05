class Libro{
    constructor(titulo, autor, anioPublicacion){
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }

    informacion(){
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Anio de Publicacion: ${this.anioPublicacion}`);
    }
}

const Libro1 = new Libro("Coquito 5","Coco",2022);

Libro1.informacion();