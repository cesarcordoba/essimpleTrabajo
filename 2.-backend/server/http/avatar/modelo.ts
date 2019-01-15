

import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey, BeforeUpdate, AfterCreate, AfterUpdate, BeforeCreate } from 'sequelize-typescript';
import { Usuario } from '../usuario/modelo';

@Table({
    timestamps: true,
    tableName: 'avatares'
})
export class Avatar extends Model<Avatar> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;



    @Column(DataType.STRING)
    link : string;



    @BelongsTo(()=> Usuario, 'IdUsuario')
    Usuario : Usuario;

    @ForeignKey(() => Usuario)
    @Column
    IdUsuario: number;
    

    constructor(values?: any, options?: any) {
        super(values, options);
    }
}