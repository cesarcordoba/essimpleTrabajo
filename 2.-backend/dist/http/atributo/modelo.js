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
const modelo_1 = require("../categoria/modelo");
const modelo_2 = require("../opcion/modelo");
let Atributo = class Atributo extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Atributo.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Atributo.prototype, "nombre", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_1.Categoria, 'categorias_atributos', 'IdCategoria', 'IdAtributo'),
    __metadata("design:type", Array)
], Atributo.prototype, "Categorias", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => modelo_2.Opcion, 'IdAtributo'),
    __metadata("design:type", Array)
], Atributo.prototype, "Opciones", void 0);
Atributo = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
        tableName: 'atributos'
    }),
    __metadata("design:paramtypes", [Object, Object])
], Atributo);
exports.Atributo = Atributo;
