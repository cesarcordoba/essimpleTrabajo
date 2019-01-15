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
const modelo_1 = require("../portada/modelo");
const modelo_2 = require("../multimedia/modelo");
const modelo_3 = require("../inversionista/modelo");
const modelo_4 = require("../usuario/modelo");
const modelo_5 = require("../contratista/modelo");
let Proyecto = class Proyecto extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Proyecto.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Proyecto.prototype, "nombre", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Proyecto.prototype, "resumen", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], Proyecto.prototype, "contenido", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Proyecto.prototype, "meta", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Proyecto.prototype, "acumulado", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Proyecto.prototype, "minimo", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Proyecto.prototype, "plazo", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Proyecto.prototype, "rendimiento", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Proyecto.prototype, "retorno", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Proyecto.prototype, "participacion", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Proyecto.prototype, "pago_utilidades", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Proyecto.prototype, "ubicacion", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Proyecto.prototype, "url_ubicacion", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Proyecto.prototype, "fecha_inicio", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Proyecto.prototype, "fecha_termino", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Proyecto.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => modelo_1.Portada, 'IdProyecto'),
    __metadata("design:type", Array)
], Proyecto.prototype, "Portadas", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => modelo_2.Multimedia, 'IdProyecto'),
    __metadata("design:type", Array)
], Proyecto.prototype, "Multimedias", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_4.Usuario, () => modelo_3.Inversionista, 'IdProyecto', 'IdUsuario'),
    __metadata("design:type", Array)
], Proyecto.prototype, "Inversionistas", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_4.Usuario, () => modelo_5.Contratista, 'IdProyecto', 'IdUsuario'),
    __metadata("design:type", Array)
], Proyecto.prototype, "Contratistas", void 0);
Proyecto = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
        tableName: 'proyectos'
    }),
    __metadata("design:paramtypes", [Object, Object])
], Proyecto);
exports.Proyecto = Proyecto;
