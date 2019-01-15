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
const modelo_1 = require("../llave/modelo");
const sequelize_typescript_1 = require("sequelize-typescript");
const modelo_2 = require("../inversionista/modelo");
const modelo_3 = require("../proyecto/modelo");
const modelo_4 = require("../avatar/modelo");
const modelo_5 = require("../log/modelo");
const modelo_6 = require("../contratista/modelo");
let Usuario = class Usuario extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Usuario.prototype, "nombre", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Usuario.prototype, "apellido", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Usuario.prototype, "correo", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Usuario.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Usuario.prototype, "tipo", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Usuario.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => modelo_4.Avatar, 'IdUsuario'),
    __metadata("design:type", Array)
], Usuario.prototype, "Avatares", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => modelo_5.Log, 'IdUsuario'),
    __metadata("design:type", Array)
], Usuario.prototype, "Logs", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => modelo_1.Llave, 'IdUsuario'),
    __metadata("design:type", modelo_1.Llave)
], Usuario.prototype, "Llave", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_3.Proyecto, () => modelo_2.Inversionista, 'IdUsuario', 'IdProyecto'),
    __metadata("design:type", Array)
], Usuario.prototype, "Inversionistas", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_3.Proyecto, () => modelo_6.Contratista, 'IdUsuario', 'IdProyecto'),
    __metadata("design:type", Array)
], Usuario.prototype, "Contratistas", void 0);
Usuario = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
        tableName: 'usuarios'
    }),
    __metadata("design:paramtypes", [Object, Object])
], Usuario);
exports.Usuario = Usuario;
