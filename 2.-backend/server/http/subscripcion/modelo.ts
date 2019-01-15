

import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey} from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'subscripciones'
})
export class Subscripcion extends Model<Subscripcion> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;


    @Column(DataType.STRING)
    suscriptor : undefined;


    constructor(values?: any, options?: any) {
        super(values, options);
    }
}
