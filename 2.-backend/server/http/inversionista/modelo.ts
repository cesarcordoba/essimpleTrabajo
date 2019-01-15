

import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey} from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'inversionistas'
})
export class Inversionista extends Model<Inversionista> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;



    @Column(DataType.INTEGER)
    monto : number;



    constructor(values?: any, options?: any) {
        super(values, options);
    }
}