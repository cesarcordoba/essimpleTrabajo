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
const modelo_1 = require("../contratista/modelo");
let Constructora = class Constructora extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
};
__decorate([
    sequelize_typescript_1.Column({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Constructora.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Constructora.prototype, "nombreConstructora", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Constructora.prototype, "director", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Constructora.prototype, "direccion", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Constructora.prototype, "fecha_constitucion", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", void 0)
], Constructora.prototype, "rfc", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => modelo_1.Contratista, 'constructorascontratistas', 'IdConstructora', 'IdContratista'),
    __metadata("design:type", Array)
], Constructora.prototype, "Contratistas", void 0);
Constructora = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
        tableName: 'constructoras'
    }),
    __metadata("design:paramtypes", [Object, Object])
], Constructora);
exports.Constructora = Constructora;
