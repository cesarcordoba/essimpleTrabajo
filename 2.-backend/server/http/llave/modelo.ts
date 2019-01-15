

import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey} from 'sequelize-typescript';
import { Usuario } from '../usuario/modelo';

@Table({
    timestamps: true,
    tableName: 'llaves'
})
export class Llave extends Model<Llave> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;



    @Column(DataType.STRING)
    IdTwitter : undefined;



    @Column(DataType.STRING)
    IdFacebook : undefined;



    @Column(DataType.STRING)
    IdGoogle : undefined;



    @Column(DataType.STRING)
    IdInstagram : undefined;



    @Column(DataType.STRING)
    password : undefined;



    @BelongsTo(()=> Usuario, 'IdUsuario')
    Usuario : Usuario;

    @ForeignKey(() => Usuario)
    @Column
    IdUsuario: number;
    

    constructor(values?: any, options?: any) {
        super(values, options);
    }
}