export class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }
  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  set montoBrutoAnual(nuevo_montoBrutoAnual) {
    this._montoBrutoAnual = nuevo_montoBrutoAnual;
  }
  get deducciones() {
    return this._deducciones;
  }
  set deducciones(nuevo_deducciones) {
    this._deducciones = nuevo_deducciones;
  }
}
//Instancia
const calculo_1 = new Impuestos(500000, 80000); //se da valor a Obj nuevo
console.log(calculo_1.montoBrutoAnual, calculo_1.deducciones);
