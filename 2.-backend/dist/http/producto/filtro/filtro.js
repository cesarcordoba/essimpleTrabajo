"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const modelo_1 = require("../modelo");
const modelo_2 = require("../../version/modelo");
const modelo_3 = require("../../promo/modelo");
const modelo_4 = require("../../categoria/modelo");
const modelo_5 = require("../../color/modelo");
const modelo_6 = require("../../opcion/modelo");
const _ = require('lodash');
module.exports = (req, res, next) => {
    return new Promise((resolve, reject) => {
        ;
        (function () {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(req.body);
                var buscar = (array, id) => array.filter(n => n.IdCategoria === id).map(n => [n.id, buscar(array, n.id)]);
                var peticion = {
                    // order : req.body.order,
                    where: req.body.Where,
                    include: []
                };
                if (req.body.Promo)
                    peticion.include.push({
                        model: modelo_3.Promo,
                        as: 'Promos',
                        where: { status: 1 }
                    });
                if (req.body.Precio && !_.isEqual(req.body.Precio, [0, 10000]))
                    peticion.include.push({
                        model: modelo_2.Version,
                        as: 'Versiones',
                        where: {
                            status: 1,
                            precio: { $between: req.body.Precio },
                        }
                    });
                if (req.body.version)
                    peticion.include.push({
                        model: modelo_2.Version,
                        as: 'Versiones',
                        where: { nombre: { $like: '%' + req.body.version + '%', $between: [0, 100] },
                        }
                    });
                if (req.body.Opcion && req.body.Opcion.length > 0)
                    peticion.include.push({
                        model: modelo_2.Version,
                        as: 'Versiones',
                        where: { status: 1 },
                        include: [
                            {
                                model: modelo_6.Opcion,
                                as: 'Opciones',
                                where: { status: 1, id: { $or: req.body.Opcion } }
                            }
                        ]
                    });
                if (req.body.nombre)
                    peticion.where.push({
                        nombre: { $like: '%' + req.body.nombre + '%' }
                    });
                if (req.body.Categoria && req.body.Categoria.id)
                    yield modelo_4.Categoria.findAll()
                        .then(response => {
                        peticion.where.push({ IdCategoria: { $or: _.flattenDeep([req.body.Categoria.id, buscar(response, req.body.Categoria.id)]) } });
                    });
                if (req.body.Marcas && req.body.Marcas.length > 0)
                    peticion.where.push({ IdMarca: req.body.Marcas });
                if (req.body.Colores && req.body.Colores.length > 0)
                    peticion.include.push({
                        model: modelo_5.Color,
                        as: 'Colores',
                        where: { status: 1, id: { $or: req.body.Colores } }
                    });
                yield modelo_1.Producto.findAndCountAll(peticion)
                    .then(response => resolve(new Object({
                    peticion: peticion,
                    items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
                    paginas: Math.ceil(response.count / req.body.limite)
                })));
            });
        })();
    });
};
