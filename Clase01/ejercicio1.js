class Persona{
    constructor(nombre, edad, ciudad){
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const persona1 = new Persona("Angel", 19, "Lima");

persona1.saludar();