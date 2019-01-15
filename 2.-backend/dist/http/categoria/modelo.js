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
var Categoria_1;
const sequelize_typescript_1 = require("sequelize-typescript");
const modelo_1 = require("../producto/modelo");
const modelo_2 = require("../atributo/modelo");
let Categoria = Categoria_1 = class Categoria extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Categoria.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Categoria.prototype, "nombre", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Categoria.prototype, "nivel", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Categoria.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => modelo_1.Producto, 'IdCategoria'),
    __metadata("design:type", Array)
], Categoria.prototype, "Productos", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Categoria_1, 'IdCategoria'),
    __metadata("design:type", Array)
], Categoria.prototype, "SubCategorias", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Categoria_1, 'IdCategoria'),
    __metadata("design:type", Array)
], Categoria.prototype, "PreCategoria", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Categoria_1),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Categoria.prototype, "IdCategoria", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_2.Atributo, 'categorias_atributos', 'IdCategoria', 'IdAtributo'),
    __metadata("design:type", Array)
], Categoria.prototype, "Atributos", void 0);
Categoria = Categoria_1 = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
        tableName: 'categorias'
    }),
    __metadata("design:paramtypes", [Object, Object])
], Categoria);
exports.Categoria = Categoria;
