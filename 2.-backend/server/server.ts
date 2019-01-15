import { Server } from './main'
import { config } from './conf/config'

const servidor = Server.init(config.app.port, config.mode, config.urlAllowOrigin);

servidor.iniciarServidor(() => console.log('Iniciando servidor en el puerto ' + config.app.port))


