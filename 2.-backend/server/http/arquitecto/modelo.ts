

import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey} from 'sequelize-typescript';
import { Contratista } from '../contratista/modelo';

@Table({
    timestamps: true,
    tableName: 'arquitectos'
})
export class Arquitecto extends Model<Arquitecto> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;



    @Column(DataType.STRING)
    cedula : undefined;



    @BelongsToMany(()=> Contratista,'arquitectoscontratistas','IdArquitecto', 'IdContratista')
    Contratistas : Contratista[];

    constructor(values?: any, options?: any) {
        super(values, options);
    }
}