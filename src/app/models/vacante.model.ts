export class VacanteModel {
    asignacion:string;
    creado_en:string;
    descripcion:string;
    empresa:string;
    estado:string;
    id:number;
    responsable:string;
    titulo:string;

    constructor(){
        this.estado="abierta";
        this.responsable="publica";
    }
}