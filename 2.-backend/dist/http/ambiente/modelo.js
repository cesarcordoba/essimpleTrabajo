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
const modelo_1 = require("../posicion/modelo");
const modelo_2 = require("../producto/modelo");
const modelo_3 = require("../cuarto/modelo");
const modelo_4 = require("../espacio/modelo");
let Ambiente = class Ambiente extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Ambiente.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Ambiente.prototype, "nombre", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => modelo_3.Cuarto, 'IdCuarto'),
    __metadata("design:type", modelo_3.Cuarto)
], Ambiente.prototype, "Cuarto", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => modelo_3.Cuarto),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Ambiente.prototype, "IdCuarto", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => modelo_4.Espacio, 'IdAmbiente'),
    __metadata("design:type", Array)
], Ambiente.prototype, "Espacios", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_2.Producto, () => modelo_1.Posicion, 'IdAmbiente', 'IdProducto'),
    __metadata("design:type", Array)
], Ambiente.prototype, "Productos", void 0);
Ambiente = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
        tableName: 'ambientes'
    }),
    __metadata("design:paramtypes", [Object, Object])
], Ambiente);
exports.Ambiente = Ambiente;
