import { Table, Column, Model, HasMany, HasOne, BelongsTo, BelongsToMany, DataType,  ForeignKey} from 'sequelize-typescript';
import { Proyecto } from '../proyecto/modelo';
import { Cantidad } from '../cantidad/modelo';

@Table({
    timestamps: true,
    tableName: 'servicios'
})
export class Servicio extends Model<Servicio> {

    @Column({primaryKey: true, autoIncrement:true})
    id: number;

    @Column(DataType.STRING)
    nombre : undefined;

    @BelongsToMany(()=> Proyecto, () => Cantidad,'IdServicio', 'IdProyecto')
    Cantidades : Proyecto[];

    constructor(values?: any, options?: any) {
        super(values, options);
    }
}