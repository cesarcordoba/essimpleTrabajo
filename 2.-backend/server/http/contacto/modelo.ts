

import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey} from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'contactos'
})
export class Contacto extends Model<Contacto> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;



    @Column(DataType.STRING)
    nombre : undefined;



    @Column(DataType.STRING)
    correo : undefined;



    @Column(DataType.STRING)
    empresa : undefined;



    @Column(DataType.TEXT)
    mensaje : string;



    constructor(values?: any, options?: any) {
        super(values, options);
    }
}