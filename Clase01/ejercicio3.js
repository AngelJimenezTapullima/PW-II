class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularTotal(){
        return this.precio * this.cantidad;
    }
}

const producto1 = new Producto("Coca Cola", 3.40, 12);
console.log(`Costo total de ${producto1.nombre}: `, producto1.calcularTotal());