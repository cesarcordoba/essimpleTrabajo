"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const config_1 = require("./conf/config");
const servidor = main_1.Server.init(config_1.config.app.port, config_1.config.mode, config_1.config.urlAllowOrigin);
servidor.iniciarServidor(() => console.log('Iniciando servidor en el puerto ' + config_1.config.app.port));
