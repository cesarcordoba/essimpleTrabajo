"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modelo_1 = require("../modelo");
const _ = require('lodash');
module.exports = (req, res, next) => {
    return new Promise((resolve, reject) => {
        modelo_1.Producto.findById(req.params.id)
            .then(item => item.$get('Versiones', { where: { status: 1 } }))
            .then(response => resolve(response));
    });
};
