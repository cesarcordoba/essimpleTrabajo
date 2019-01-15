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
const modelo_1 = require("../proyecto/modelo");
let Portada = class Portada extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Portada.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Portada.prototype, "link", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Portada.prototype, "key", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Portada.prototype, "tamano", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => modelo_1.Proyecto, 'IdProyecto'),
    __metadata("design:type", modelo_1.Proyecto)
], Portada.prototype, "Proyecto", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => modelo_1.Proyecto),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Portada.prototype, "IdProyecto", void 0);
Portada = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
        tableName: 'portadas'
    }),
    __metadata("design:paramtypes", [Object, Object])
], Portada);
exports.Portada = Portada;
