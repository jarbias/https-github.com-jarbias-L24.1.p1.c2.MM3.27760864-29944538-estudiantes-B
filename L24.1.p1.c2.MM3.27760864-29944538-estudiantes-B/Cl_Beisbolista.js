import Cl_Estudiante from "./Cl_Estudiante";

export default class Cl_Fubolista extends Cl_Estudiante {
    constructor(nombre, tipo, notasacumuladas, cantidadmaterias) {
        super(nombre, tipo, notasacumuladas, cantidadmaterias);
    }

    aceptadoBeis() {
        if (this.edad >= 21 && this.promedio() >= 14) 
            return "es admitido en beisbol";
        else
            return "no es admitido en beisbol";
    }
}