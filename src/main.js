//Se importan librerias o archivos
import { Cliente } from "./clientes.js";
import { Impuestos } from "./impuestos.js";

const nombre_1 = new Cliente("Hugo");
console.log(nombre_1.nombre);
nombre_1.nombre = "Paco";
console.log(nombre_1.nombre);

const calculo_1 = new Impuestos(500000, 80000);
console.log(calculo_1.calcularImpuesto());

//ES6 INTERPOLACIÓN
`Luis ${nombre_1}, 550000,90000 ${calculo_1}`;
