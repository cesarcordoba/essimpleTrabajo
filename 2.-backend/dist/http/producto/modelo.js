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
const modelo_2 = require("../color/modelo");
const modelo_3 = require("../imagen/modelo");
const modelo_4 = require("../portada/modelo");
const modelo_5 = require("../version/modelo");
const modelo_6 = require("../marca/modelo");
const modelo_7 = require("../gama/modelo");
const modelo_8 = require("../linea/modelo");
const modelo_9 = require("../margen/modelo");
const modelo_10 = require("../disponible/modelo");
const modelo_11 = require("../promo/modelo");
const modelo_12 = require("../posicion/modelo");
const modelo_13 = require("../ambiente/modelo");
let Producto = class Producto extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Producto.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Producto.prototype, "nombre", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Producto.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => modelo_1.Categoria, 'IdCategoria'),
    __metadata("design:type", modelo_1.Categoria)
], Producto.prototype, "Categoria", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => modelo_1.Categoria),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Producto.prototype, "IdCategoria", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_2.Color, 'productos_colores', 'IdProducto', 'IdColor'),
    __metadata("design:type", Array)
], Producto.prototype, "Colores", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => modelo_3.Imagen, 'IdProducto'),
    __metadata("design:type", Array)
], Producto.prototype, "Imagenes", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => modelo_4.Portada, 'IdProducto'),
    __metadata("design:type", Array)
], Producto.prototype, "Portadas", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => modelo_5.Version, 'IdProducto'),
    __metadata("design:type", Array)
], Producto.prototype, "Versiones", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => modelo_6.Marca, 'IdMarca'),
    __metadata("design:type", modelo_6.Marca)
], Producto.prototype, "Marca", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => modelo_6.Marca),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Producto.prototype, "IdMarca", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => modelo_7.Gama, 'IdGama'),
    __metadata("design:type", modelo_7.Gama)
], Producto.prototype, "Gama", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => modelo_7.Gama),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Producto.prototype, "IdGama", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => modelo_8.Linea, 'IdLinea'),
    __metadata("design:type", modelo_8.Linea)
], Producto.prototype, "Linea", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => modelo_8.Linea),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Producto.prototype, "IdLinea", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_9.Margen, 'productos_margenes', 'IdProducto', 'IdMargen'),
    __metadata("design:type", Array)
], Producto.prototype, "Margenes", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_11.Promo, () => modelo_10.Disponible, 'IdProducto', 'IdPromo'),
    __metadata("design:type", Array)
], Producto.prototype, "Promos", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_13.Ambiente, () => modelo_12.Posicion, 'IdProducto', 'IdAmbiente'),
    __metadata("design:type", Array)
], Producto.prototype, "Ambientes", void 0);
Producto = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
        tableName: 'productos'
    }),
    __metadata("design:paramtypes", [Object, Object])
], Producto);
exports.Producto = Producto;
