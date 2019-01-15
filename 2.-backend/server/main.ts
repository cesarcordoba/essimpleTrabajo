import { AutentificacionRouter } from './http/rutas/Autentificacion';


import * as express from 'express';
import * as subdomain from 'express-subdomain';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import * as morgan from 'morgan';

// import { UsuarioRouter } from './http/rutas/Usuario';
// import { ProspectoRouter } from './http/rutas/Prospecto';


//conexion a la base de datos
import { Conexion } from './http/conexion';
import { Ruteador } from './http/ruteo';
// import { ImagenRouter } from './http/rutas/Imagen';
// import { VideoRouter } from './http/rutas/Video';


import { ProyectoRouter } from './http/proyecto/ruta';
import { ContactoRouter } from './http/contacto/ruta';
import { MultimediaRouter } from './http/multimedia/ruta';
import { PortadaRouter } from './http/portada/ruta';
import { InversionistaRouter } from './http/inversionista/ruta';
import { UsuarioRouter } from './http/usuario/ruta';
import { ContratistaRouter } from './http/contratista/ruta';
import { ArquitectoRouter } from './http/arquitecto/ruta';
import { ConstructoraRouter } from './http/constructora/ruta';
import { LlaveRouter } from './http/llave/ruta';
import { AvatarRouter } from './http/avatar/ruta';
import { LogRouter } from './http/log/ruta';
import { SubscripcionRouter } from './http/subscripcion/ruta';
import { Proyecto } from './http/proyecto/modelo';
import { Contacto } from './http/contacto/modelo';
import { Multimedia } from './http/multimedia/modelo';
import { Portada } from './http/portada/modelo';
import { Inversionista } from './http/inversionista/modelo';
import { Usuario } from './http/usuario/modelo';
import { Contratista } from './http/contratista/modelo';
import { Arquitecto } from './http/arquitecto/modelo';
import { Constructora } from './http/constructora/modelo';
import { Llave } from './http/llave/modelo';
import { Avatar } from './http/avatar/modelo';
import { Log } from './http/log/modelo';
import { Subscripcion } from './http/subscripcion/modelo';


export class Server {

    app: express.Application;
    private _url_allow_origin: string[];

    constructor(private port: number, modo, urlAllowOrigin?: string[]) {
        console.log(modo)
        this._url_allow_origin = urlAllowOrigin;
        this.app = express();
        this.app.set('port', (process.env.PORT || this.port));
        this.config();
        this.apiRutas();
    }

    static init(port: number, modo, urlAllowOrigin?: string[]): Server {
        return new Server(port, modo, urlAllowOrigin);
    }

    iniciarServidor(callback?: Function) {
        this.app.listen(process.env.PORT || 5000, callback);
    }

    private config() {

        let conexion = new Conexion();
        conexion.addModels([
        
            Proyecto,
            Contacto,
            Multimedia,
            Portada,
            Inversionista,
            Usuario,
            Contratista,
            Arquitecto,
            Constructora,
            Llave,
            Avatar,
            Log,
            Subscripcion,
        ])
        conexion.sync();

        this.app.use((req, res, next) => {
            let origin = req.headers.origin;
            console.log(origin)
            if(origin && this._url_allow_origin.indexOf(origin.toString()) > -1){
                 res.setHeader('Access-Control-Allow-Origin', origin);
            }
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
            res.header(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept"
            );
            next();
        })

        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(cookieParser());

        this.app.use(session({ secret: '01f4845/564564/6@@fas588--[[}++', resave: true, saveUninitialized: true }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());

        morgan('combined', { skip: function (req, res) { return res.statusCode < 400 } });
    }

    private apiRutas() {
        let rutas
        =Ruteador.init([
            new ProyectoRouter().rutas(),
            new ContactoRouter().rutas(),
            new MultimediaRouter().rutas(),
            new PortadaRouter().rutas(),
            new InversionistaRouter().rutas(),
            new UsuarioRouter().rutas(),
            new ContratistaRouter().rutas(),
            new ArquitectoRouter().rutas(),
            new ConstructoraRouter().rutas(),
            new LlaveRouter().rutas(),
            new AvatarRouter().rutas(),
            new LogRouter().rutas(),
            new SubscripcionRouter().rutas(),
            // new UsuarioRouter().rutas(),
             new AutentificacionRouter().rutas(),
            // new ProspectoRouter().rutas(),
            // new ImagenRouter().rutas(),
            // new VideoRouter().rutas()
        ])

        this.app.use(subdomain('api', rutas.route))
        this.app.use( rutas.route)
    }
}
