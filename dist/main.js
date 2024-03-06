"use strict";

var _clientes = require("./clientes.js");
var _impuestos = require("./impuestos.js");
//Se importan librerias o archivos

var nombre_1 = new _clientes.Cliente("Hugo");
console.log(nombre_1.nombre);
nombre_1.nombre = "Paco";
console.log(nombre_1.nombre);
var calculo_1 = new _impuestos.Impuestos(500000, 80000);
console.log(calculo_1.calcularImpuesto());

//ES6 INTERPOLACIÓN
"Luis ".concat(nombre_1, ", 550000,90000 ").concat(calculo_1);