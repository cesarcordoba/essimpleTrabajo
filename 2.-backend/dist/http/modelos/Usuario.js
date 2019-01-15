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
const bcrypt = require("bcrypt");
let Usuario = class Usuario extends sequelize_typescript_1.Model {
    constructor(values, options) {
        super(values, options);
    }
    static formatearDatos(user) {
        user.correo = user.correo.toLowerCase();
    }
    static crearLLave(user, options) {
        if (user.llaveSocial) {
            if (user.password) {
                console.log('tiene llave y paswwor, actualicemos');
                user.$get('LlaveSocial').then((llave) => {
                    bcrypt.hash(user.password, 10, function (err, hash) {
                        if (err)
                            return err;
                        llave.update({ password: hash });
                    });
                });
            }
        }
        else {
            console.log('no tiene llave , vamo a crearla');
            bcrypt.hash(user.password, 10, function (err, hash) {
                if (err)
                    return err;
                user.$create('LlaveSocial', { password: hash })
                    .then(llave => {
                    llave ?
                        llave.$create('Avatar', { fb_avatar: 'assets/images/perfil.png' })
                            .then(avatar => avatar ? user : { err: 'no se creo el avatar' })
                        :
                            { err: 'No se creo la llave' };
                })
                    .catch(erro => erro);
            });
        }
    }
    autenticacion(password) {
        if (bcrypt.compareSync(password, this.llaveSocial.password))
            return true;
        else
            return false;
    }
    getAvatar() {
        this.id && this.llaveSocial && this.llaveSocial.avatar ?
            this.llaveSocial.avatar
            :
                { fb_avatar: 'assets/images/perfil.png' };
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Default(sequelize_typescript_1.DataType.UUIDV4),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.UUID),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Usuario.prototype, "correo", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.VIRTUAL),
    __metadata("design:type", String)
], Usuario.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Usuario.prototype, "tipo", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => LlaveSocial_1.LlaveSocial, 'id_usuario'),
    __metadata("design:type", LlaveSocial_1.LlaveSocial)
], Usuario.prototype, "llaveSocial", void 0);
__decorate([
    sequelize_typescript_1.BeforeUpdate,
    sequelize_typescript_1.BeforeCreate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Usuario]),
    __metadata("design:returntype", void 0)
], Usuario, "formatearDatos", null);
__decorate([
    sequelize_typescript_1.AfterCreate,
    sequelize_typescript_1.AfterUpdate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Usuario, Object]),
    __metadata("design:returntype", void 0)
], Usuario, "crearLLave", null);
Usuario = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true
    }),
    __metadata("design:paramtypes", [Object, Object])
], Usuario);
exports.Usuario = Usuario;
