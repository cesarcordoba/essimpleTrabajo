"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modelo_1 = require("../modelo");
const modelo_2 = require("../../ambiente/modelo");
const modelo_3 = require("../../espacio/modelo");
const _ = require('lodash');
module.exports = (req, res, next) => {
    return new Promise((resolve, reject) => {
        modelo_1.Gama.findById(req.params.id)
            .then(gama => gama.$get('Productos', {
            include: [
                {
                    model: modelo_2.Ambiente,
                    as: 'Ambientes',
                    include: [
                        {
                            model: modelo_3.Espacio,
                            as: 'Espacios'
                        }
                    ]
                }
            ]
        }))
            .then((response) => _.uniqBy(_.flattenDeep(response.map(n => n.Ambientes)), (n => n.id)))
            .then(response => resolve(response));
    });
};
