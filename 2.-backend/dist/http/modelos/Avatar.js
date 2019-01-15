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
const LlaveSocial_1 = require("./LlaveSocial");
// import { Item } from './Item';
let Avatar = class Avatar extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Default(sequelize_typescript_1.DataType.UUIDV4),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", Number)
], Avatar.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Avatar.prototype, "fb_avatar", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Avatar.prototype, "tw_avatar", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Avatar.prototype, "gg_avatar", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Avatar.prototype, "insta_avatar", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => LlaveSocial_1.LlaveSocial, 'id_llave_social'),
    __metadata("design:type", LlaveSocial_1.LlaveSocial)
], Avatar.prototype, "llaveSocial", void 0);
Avatar = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true
    }),
    __metadata("design:paramtypes", [Object, Object])
], Avatar);
exports.Avatar = Avatar;
