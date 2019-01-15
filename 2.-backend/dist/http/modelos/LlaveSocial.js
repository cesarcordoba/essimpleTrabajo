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
const Avatar_1 = require("./Avatar");
const Usuario_1 = require("./Usuario");
const sequelize_typescript_1 = require("sequelize-typescript");
// import { Item } from './Item';
let LlaveSocial = class LlaveSocial extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Default(sequelize_typescript_1.DataType.UUIDV4),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", Number)
], LlaveSocial.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], LlaveSocial.prototype, "fb_id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], LlaveSocial.prototype, "tw_id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], LlaveSocial.prototype, "gl_id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], LlaveSocial.prototype, "inst_id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], LlaveSocial.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Usuario_1.Usuario, 'id_usuario'),
    __metadata("design:type", Usuario_1.Usuario)
], LlaveSocial.prototype, "usuario", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => Avatar_1.Avatar, 'id_llave_social'),
    __metadata("design:type", Avatar_1.Avatar)
], LlaveSocial.prototype, "avatar", void 0);
LlaveSocial = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true
    }),
    __metadata("design:paramtypes", [Object, Object])
], LlaveSocial);
exports.LlaveSocial = LlaveSocial;
