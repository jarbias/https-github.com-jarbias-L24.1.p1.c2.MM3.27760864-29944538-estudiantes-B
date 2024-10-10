import Cl_Futbolista from "./Cl_Fubolista";
import Cl_Beisbolista from "./Cl_Beisbolista";

let Futbolista = new Cl_Futbolista("Felix", 20, 2, 110, 10);
let Beisbolista = new Cl_Beisbolista("juan",21, 1, 132, 8);
let futbol = new Cl_Futbolista
let beisbol = new Cl_Beisbolista
futbol.aceptado(Futbolista)
beisbol.aceptadobeis(Beisbolista)
let salida= document.getElementById("salida")
salida.innerHTML += "nombre del estudiante es "+ futbol.nombre + "acumulado de notas"+ Futbolista.promedio()
