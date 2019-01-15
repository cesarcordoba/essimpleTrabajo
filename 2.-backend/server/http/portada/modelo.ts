

import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey} from 'sequelize-typescript';
import { Proyecto } from '../proyecto/modelo';

@Table({
    timestamps: true,
    tableName: 'portadas'
})
export class Portada extends Model<Portada> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;



    @Column(DataType.STRING)
    link : undefined;



    @Column(DataType.STRING)
    key : undefined;



    @Column(DataType.STRING)
    tamano : undefined;



    @BelongsTo(()=> Proyecto, 'IdProyecto')
    Proyecto : Proyecto;

    @ForeignKey(() => Proyecto)
    @Column
    IdProyecto: number;
    

    constructor(values?: any, options?: any) {
        super(values, options);
    }
}