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
const modelo_2 = require("../opcion/modelo");
const modelo_3 = require("../descuento/modelo");
const modelo_4 = require("../saliente/modelo");
const modelo_5 = require("../oferta/modelo");
const modelo_6 = require("../entrante/modelo");
const modelo_7 = require("../inventario/modelo");
const modelo_8 = require("../sucursal/modelo");
let Version = class Version extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Version.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Version.prototype, "nombre", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Version.prototype, "linea", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Version.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Version.prototype, "precio", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Version.prototype, "existencia", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => modelo_1.Producto, 'IdProducto'),
    __metadata("design:type", modelo_1.Producto)
], Version.prototype, "Producto", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => modelo_1.Producto),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Version.prototype, "IdProducto", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_2.Opcion, 'versiones_opciones', 'IdVersion', 'IdOpcion'),
    __metadata("design:type", Array)
], Version.prototype, "Opciones", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_3.Descuento, 'versiones_descuentos', 'IdVersion', 'IdDescuento'),
    __metadata("design:type", Array)
], Version.prototype, "Descuentos", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_5.Oferta, () => modelo_4.Saliente, 'IdVersion', 'IdOferta'),
    __metadata("design:type", Array)
], Version.prototype, "Entrantes", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_5.Oferta, () => modelo_6.Entrante, 'IdVersion', 'IdOferta'),
    __metadata("design:type", Array)
], Version.prototype, "Salientes", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_8.Sucursal, () => modelo_7.Inventario, 'IdVersion', 'IdSucursal'),
    __metadata("design:type", Array)
], Version.prototype, "Sucursales", void 0);
Version = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
        tableName: 'versiones'
    }),
    __metadata("design:paramtypes", [Object, Object])
], Version);
exports.Version = Version;
