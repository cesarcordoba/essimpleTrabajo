import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey} from 'sequelize-typescript';


@Table({
    timestamps: true,
    tableName: 'cantidades'
})
export class Cantidad extends Model<Cantidad> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;


    @Column(DataType.STRING)
    cantidad : undefined;
    

    constructor(values?: any, options?: any) {
        super(values, options);
    }
}