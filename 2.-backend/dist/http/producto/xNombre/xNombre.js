"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modelo_1 = require("../modelo");
const _ = require('lodash');
module.exports = (req, res, next) => {
    return new Promise((resolve, reject) => {
        console.log(req.body.nombre);
        modelo_1.Producto.findAll({
            where: {
                nombre: {
                    $like: '%' + req.body.nombre + '%',
                }
            }
        })
            .then(response => resolve(response));
    });
};
