class Perro{
    constructor(nombre, raza, edad){
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }

    informacionPerro(){
        console.log(`Nombre: ${this.nombre}, Raza: ${this.raza}, Edad: ${this.edad} anios`);
    }
}

const Perro1 = new Perro("Zeus","Pitbull",15);
Perro1.informacionPerro();