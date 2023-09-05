class Circulo{
    constructor(radio){
        this.radio = radio;
    }

    calcularArea(){
        return Math.PI * this.radio ** 2; // el exponente se coloca con **
    }

    calcularPerimetro(){
        return 2 * Math.PI * this.radio;
    }
}

const circulo1 = new Circulo(5);
console.log("Area:" + circulo1.calcularArea());
console.log("Perimetro:", circulo1.calcularPerimetro().toFixed(2)); // .toFixed(n) n = Cantidad de decimales que se desea colocar 
