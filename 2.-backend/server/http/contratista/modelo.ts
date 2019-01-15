

import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey} from 'sequelize-typescript';
import { Arquitecto } from '../arquitecto/modelo';
import { Constructora } from '../constructora/modelo';

@Table({
    timestamps: true,
    tableName: 'contratistas'
})
export class Contratista extends Model<Contratista> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;



    @Column(DataType.STRING)
    direccion : undefined;



    @Column(DataType.STRING)
    telefono : undefined;



    @Column(DataType.STRING)
    paginaWeb : undefined;



    @Column(DataType.INTEGER)
    numPromAnaualCasas : number;



    @Column(DataType.INTEGER)
    costoPromedio : number;



    @Column(DataType.STRING)
    volumen : undefined;


    @Column(DataType.STRING)
    tipo : undefined;
    

    @BelongsToMany(()=> Arquitecto,'arquitectoscontratistas','IdContratista', 'IdArquitecto')
    Arquitectos : Arquitecto[];

    @BelongsToMany(()=> Constructora,'constructorascontratistas','IdContratista', 'IdConstructora')
    Constructoras : Constructora[];

    constructor(values?: any, options?: any) {
        super(values, options);
    }
}