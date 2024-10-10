import Cl_Estudiante from "./Cl_Estudiante";
export default class Cl_Futbolista extends Cl_Estudiante {
    constructor(nombre,edad, tipo, notasacumuladas, cantidadmaterias) {
        super(nombre,edad, tipo, notasacumuladas, cantidadmaterias);
        

    }
    aceptado() {
        if (this.edad >= 19 && this.promedio() >= 12) 
            return "es admitido en futbol";
        else
            return "no es admitido en futbol";
    }

}