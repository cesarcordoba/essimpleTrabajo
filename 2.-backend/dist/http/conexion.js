"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("../conf/config");
class Conexion extends sequelize_typescript_1.Sequelize {
    constructor() {
        super({
            database: config_1.config.db.database,
            dialect: 'mysql',
            username: config_1.config.db.username,
            password: config_1.config.db.password,
            host: config_1.config.db.host,
            port: config_1.config.db.port,
            modelPaths: [],
            operatorsAliases: true
        });
    }
}
exports.Conexion = Conexion;
