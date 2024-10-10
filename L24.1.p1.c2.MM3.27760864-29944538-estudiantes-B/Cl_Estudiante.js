export default class Cl_Estudiante {
    constructor(nombre,edad, tipo, notasAcumuladas, cantidadmaterias) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
        this.notasAcumuladas = notasAcumuladas;
        this.cantidad = cantidadmaterias;
       
    }
    promedio() {
        return this.notasAcumuladas / this.cantidad;
    }
}