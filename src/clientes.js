// Fórmula: ((𝑚𝑜𝑛𝑡𝑜𝐵𝑟𝑢𝑡𝑜𝐴𝑛𝑢𝑎𝑙 − 𝑑𝑒𝑑𝑢𝑐𝑐𝑖𝑜𝑛𝑒𝑠) * 21%)

export class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this.impuesto = impuesto;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevo_nombre) {
    this._nombre = nuevo_nombre;
  }
  calcularImpuesto() {
    return (this.montoBrutoAnual - this.deducciones) * 0.21; //se cambia el % de la formula dada.
  }
}
//Instanciar object
const nombre_1 = new Cliente("Hugo");
console.log(nombre_1.nombre);
nombre_1.nombre = "Paco";
console.log(nombre_1.nombre);
