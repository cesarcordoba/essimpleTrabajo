"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const modelo_1 = require("../producto/modelo");
const modelo_2 = require("../gama/modelo");
const modelo_3 = require("../linea/modelo");
const modelo_4 = require("../margen/modelo");
const modelo_5 = require("../catalogo/modelo");
let Marca = class Marca extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Marca.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Marca.prototype, "nombre", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Marca.prototype, "clave", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Marca.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Marca.prototype, "razon", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => modelo_1.Producto, 'IdMarca'),
    __metadata("design:type", Array)
], Marca.prototype, "Productos", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => modelo_2.Gama, 'IdMarca'),
    __metadata("design:type", Array)
], Marca.prototype, "Gamas", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => modelo_3.Linea, 'IdMarca'),
    __metadata("design:type", Array)
], Marca.prototype, "Lineas", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => modelo_4.Margen, 'IdMarca'),
    __metadata("design:type", Array)
], Marca.prototype, "Margenes", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => modelo_5.Catalogo, 'IdMarca'),
    __metadata("design:type", Array)
], Marca.prototype, "Catalogos", void 0);
Marca = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
        tableName: 'marcas'
    }),
    __metadata("design:paramtypes", [Object, Object])
], Marca);
exports.Marca = Marca;
