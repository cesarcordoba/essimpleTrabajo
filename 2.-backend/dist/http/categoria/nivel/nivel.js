"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modelo_1 = require("../modelo");
const _ = require('lodash');
module.exports = (req, res, next) => {
    return new Promise((resolve, reject) => {
        modelo_1.Categoria.findAll({ where: { nivel: req.params.id } })
            .then(response => resolve(response))
            .catch(err => reject(err));
    });
};
