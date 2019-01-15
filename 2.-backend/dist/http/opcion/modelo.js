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
const modelo_1 = require("../version/modelo");
const modelo_2 = require("../atributo/modelo");
let Opcion = class Opcion extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Opcion.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Opcion.prototype, "nombre", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Opcion.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_1.Version, 'versiones_opciones', 'IdVersion', 'IdOpcion'),
    __metadata("design:type", Array)
], Opcion.prototype, "Versiones", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => modelo_2.Atributo, 'IdAtributo'),
    __metadata("design:type", modelo_2.Atributo)
], Opcion.prototype, "Atributo", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => modelo_2.Atributo),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Opcion.prototype, "IdAtributo", void 0);
Opcion = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
        tableName: 'opciones'
    }),
    __metadata("design:paramtypes", [Object, Object])
], Opcion);
exports.Opcion = Opcion;
