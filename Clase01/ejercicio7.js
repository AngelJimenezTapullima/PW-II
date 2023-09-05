class Coche{
    constructor(marca, modelo, anio, color){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }

    informacionCoche(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Anio de Fabricacion: ${this.anio}, Color: ${this.color}`);
    }
}

const Coche1 = new Coche("Ferrari","LaFerrari",2019,"Negro");

Coche1.informacionCoche();