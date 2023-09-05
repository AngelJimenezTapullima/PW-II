class Rectangulo{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return this.base * this.altura;
    }

    calcularPerimetro(){
        return 2 * (this.altura + this.base);
    }
}

const rectangulo1 = new Rectangulo(5.32, 8);
console.log("Area del Rectangulo: " + rectangulo1.calcularArea());
console.log("Perimetro del Rectangulo: " + rectangulo1.calcularPerimetro());