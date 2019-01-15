"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Imagen_1 = require("../modelos/Imagen");
const FroalaEditor = require("wysiwyg-editor-node-sdk");
class ImagenController {
    crear(req, res, next) {
        Imagen_1.Imagen.create(req.body)
            .then(response => res.status(200).jsonp(response));
    }
    buscar(req, res, next) {
        req.params.id ?
            Imagen_1.Imagen.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
            :
                Imagen_1.Imagen.findAll()
                    .then(response => res.status(200).jsonp(response));
    }
    actualizar(req, res, next) {
        Imagen_1.Imagen.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp({ msj: 'SUCCESS!' }));
    }
    eliminar(req, res, next) {
        Imagen_1.Imagen.findById(req.params.id)
            .then(imagen => imagen.destroy().then(response => res.status(200).jsonp(response)));
    }
    froala(req, res, next) {
        var configs = {
            // The name of your bucket.
            bucket: 'colnal-imagenes',
            // S3 region. If you are using the default us-east-1, it this can be ignored.
            region: 'us-east-1',
            // The folder where to upload the images.
            keyStart: 'imagenes/',
            // File access.
            acl: 'public-read',
            // AWS keys.
            accessKey: 'AKIAJEYX66PCBH6V4VHQ',
            secretKey: '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'
        };
        var s3Hash = FroalaEditor.S3.getHash(configs);
        res.status(200).jsonp(s3Hash);
        console.log(s3Hash);
    }
}
exports.ImagenController = ImagenController;
