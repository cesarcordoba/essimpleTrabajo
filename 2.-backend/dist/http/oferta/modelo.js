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
const modelo_1 = require("../promo/modelo");
const modelo_2 = require("../saliente/modelo");
const modelo_3 = require("../version/modelo");
const modelo_4 = require("../entrante/modelo");
let Oferta = class Oferta extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Oferta.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => modelo_1.Promo, 'IdPromo'),
    __metadata("design:type", modelo_1.Promo)
], Oferta.prototype, "Promo", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => modelo_1.Promo),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Oferta.prototype, "IdPromo", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_3.Version, () => modelo_2.Saliente, 'IdOferta', 'IdVersion'),
    __metadata("design:type", Array)
], Oferta.prototype, "Salientes", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_3.Version, () => modelo_4.Entrante, 'IdOferta', 'IdVersion'),
    __metadata("design:type", Array)
], Oferta.prototype, "Entrantes", void 0);
Oferta = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
        tableName: 'ofertas'
    }),
    __metadata("design:paramtypes", [Object, Object])
], Oferta);
exports.Oferta = Oferta;
