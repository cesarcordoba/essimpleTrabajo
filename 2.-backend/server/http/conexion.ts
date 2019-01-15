
import { Proyecto } from './proyecto/modelo';
import { Contacto } from './contacto/modelo';
import { Multimedia } from './multimedia/modelo';
import { Portada } from './portada/modelo';
import { Inversionista } from './inversionista/modelo';
import { Usuario } from './usuario/modelo';
import { Contratista } from './contratista/modelo';
import { Arquitecto } from './arquitecto/modelo';
import { Constructora } from './constructora/modelo';
import { Llave } from './llave/modelo';

import { Sequelize } from 'sequelize-typescript';
import { config } from '../conf/config';

export class Conexion extends Sequelize{

    constructor() {
        super({
            database: config.db.database,
            dialect: 'mysql',
            username: config.db.username,
            password: config.db.password,
            host: config.db.host,
            port: config.db.port,
            modelPaths: [],
            operatorsAliases: true
        });



    }
}