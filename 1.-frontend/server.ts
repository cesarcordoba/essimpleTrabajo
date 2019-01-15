import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import * as subdomain from 'express-subdomain';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';

import { join } from 'path';
import  definidos  from './rutas'

import { Router, Response, Request, NextFunction } from "express";


export class Ruteador {
	private _routerAdmin = Router();
	private _routerMain = Router();
	private _routerInversionista = Router();
	private _routerContratista = Router();

	constructor() { }

	static init(): Ruteador {
		return new Ruteador();
	}

	setRuteoMain(values: string[]) {
		values.forEach(string_ruta =>
			this._routerMain.get(string_ruta, (req: Request, res: Response, next: NextFunction) =>
				res.render("index", { req, res }, (err, html) => {
					if (html) {
						res.send(html);
					} else {
						console.error(err);
						res.send(err);
					}
				})
			)
		);
	}

	getRuteoMain() {
		return this._routerMain
	}

	setRuteoAdmin(values: string[]) {
		values.forEach(string_ruta => {
			string_ruta == '/' ?
				this._routerAdmin.get('/', (req: Request, res: Response, next: NextFunction) => res.redirect('/admin'))
				:
				this._routerAdmin.get(string_ruta, (req: Request, res: Response, next: NextFunction) =>
					res.render("index", { req, res }, (err, html) => {
						if (html) {
							res.send(html);
						} else {
							console.error(err);
							res.send(err);
						}
					})
				)
		}
		)
	}

	getRuteoAdmin() {
		return this._routerAdmin;
	}

	setRuteoInversionista(values: string[]) {
		values.forEach(string_ruta => {
			string_ruta == '/' ?
				this._routerInversionista.get('/', (req: Request, res: Response, next: NextFunction) => res.redirect('/inversionista'))
				:
				this._routerInversionista.get(string_ruta, (req: Request, res: Response, next: NextFunction) =>
					res.render("index", { req, res }, (err, html) => {
						if (html) {
							res.send(html);
						} else {
							console.error(err);
							res.send(err);
						}
					})
				)
		}
		)
	}

	getRuteoInversionista() {
		return this._routerInversionista;
	}

	setRuteoContratista(values: string[]) {
		values.forEach(string_ruta => {
			string_ruta == '/' ?
				this._routerContratista.get('/', (req: Request, res: Response, next: NextFunction) => res.redirect('/contratista'))
				:
				this._routerContratista.get(string_ruta, (req: Request, res: Response, next: NextFunction) =>
					res.render("index", { req, res }, (err, html) => {
						if (html) {
							res.send(html);
						} else {
							console.error(err);
							res.send(err);
						}
					})
				)
		}
		)
	}

	getRuteoContratista() {
		return this._routerContratista;
	}

}

enableProdMode();

export const app = express();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const DIST_FOLDER = join(process.cwd(), 'dist');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

app.engine('html', ngExpressEngine({
	bootstrap: AppServerModuleNgFactory,
	providers: [
		provideModuleMap(LAZY_MODULE_MAP)
	]
}));

app.set('view engine', 'html');
app.set('views', './dist/browser');

app.get('/redirect/**', (req, res) => {
	const location = req.url.substring(10);
	res.redirect(301, location);
});

app.get('*.*', express.static('./dist/browser', {
	maxAge: '1y'
}));

let ruteador = Ruteador.init();

ruteador.setRuteoMain(['/', '/proyectos', '/proyecto/:id', '/nosotros', '/preguntas', '/contacto', '/registro', '/privacidad', '/terminos', '/login', '/social/:token'])
ruteador.setRuteoAdmin([ '/', '/admin','/admin/proyectos','/admin/proyectos/:id', '/admin/usuarios', '/admin/inversionistas', '/admin/inversionista/:id', '/admin/contratistas', '/admin/contratista/:id'])
ruteador.setRuteoInversionista(['/', '/inversionista', '/inversionista/proyectos' ])
ruteador.setRuteoContratista(['/', '/contratista', '/contratista/proyectos', '/contratista/proyectos/:id'])

app.use('/', ruteador.getRuteoMain());
app.use('/', subdomain('admin', ruteador.getRuteoAdmin()));
app.use('/', subdomain('inversionista', ruteador.getRuteoInversionista()));
app.use('/', subdomain('contratista', ruteador.getRuteoContratista()));
app.use('/', definidos);
