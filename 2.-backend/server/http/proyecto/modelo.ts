

import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey} from 'sequelize-typescript';
import { Portada } from '../portada/modelo';
import { Multimedia } from '../multimedia/modelo';
import { Inversionista } from '../inversionista/modelo';
import { Usuario } from '../usuario/modelo';
import { Contratista } from '../contratista/modelo';

@Table({
    timestamps: true,
    tableName: 'proyectos'
})
export class Proyecto extends Model<Proyecto> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;



    @Column(DataType.STRING)
    nombre : undefined;



    @Column(DataType.STRING)
    resumen : undefined;



    @Column(DataType.TEXT)
    contenido : string;



    @Column(DataType.INTEGER)
    meta : number;



    @Column(DataType.INTEGER)
    acumulado : number;



    @Column(DataType.INTEGER)
    minimo : number;



    @Column(DataType.INTEGER)
    plazo : number;



    @Column(DataType.INTEGER)
    rendimiento : number;



    @Column(DataType.INTEGER)
    retorno : number;



    @Column(DataType.STRING)
    participacion : undefined;



    @Column(DataType.STRING)
    pago_utilidades : undefined;



    @Column(DataType.STRING)
    ubicacion : undefined;



    @Column(DataType.STRING)
    url_ubicacion : undefined;



    @Column(DataType.STRING)
    fecha_inicio : undefined;



    @Column(DataType.STRING)
    fecha_termino : undefined;



    @Column(DataType.STRING)
    status : undefined;



    @HasMany(()=> Portada, 'IdProyecto')
    Portadas : Portada[];

    @HasMany(()=> Multimedia, 'IdProyecto')
    Multimedias : Multimedia[];
        
        
    @BelongsToMany(()=> Usuario, () => Inversionista,'IdProyecto', 'IdUsuario')
    Inversionistas : Usuario[];

            
    @BelongsToMany(()=> Usuario, () => Contratista,'IdProyecto', 'IdUsuario')
    Contratistas : Usuario[];

            

    constructor(values?: any, options?: any) {
        super(values, options);
    }
}