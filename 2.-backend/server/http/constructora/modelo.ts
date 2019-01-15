

import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey} from 'sequelize-typescript';
import { Contratista } from '../contratista/modelo';

@Table({
    timestamps: true,
    tableName: 'constructoras'
})
export class Constructora extends Model<Constructora> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;



    @Column(DataType.STRING)
    nombreConstructora : undefined;



    @Column(DataType.STRING)
    director : undefined;



    @Column(DataType.STRING)
    direccion : undefined;



    @Column(DataType.STRING)
    fecha_constitucion : undefined;



    @Column(DataType.STRING)
    rfc : undefined;



    @BelongsToMany(()=> Contratista,'constructorascontratistas','IdConstructora', 'IdContratista')
    Contratistas : Contratista[];

    constructor(values?: any, options?: any) {
        super(values, options);
    }
}