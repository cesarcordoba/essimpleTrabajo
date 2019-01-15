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
const Person_1 = require("./Person");
let Item = class Item extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey /**
    *
    */,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Item.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Item.prototype, "itemName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Item.prototype, "itemType", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Person_1.Person),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Item.prototype, "personId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Person_1.Person),
    __metadata("design:type", Person_1.Person)
], Item.prototype, "owner", void 0);
Item = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true
    }),
    __metadata("design:paramtypes", [Object, Object])
], Item);
exports.Item = Item;
