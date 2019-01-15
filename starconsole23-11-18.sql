# ************************************************************
# Sequel Pro SQL dump
# Versión 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.6.35)
# Base de datos: starconsole
# Tiempo de Generación: 2018-11-24 00:08:02 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Volcado de tabla constelaciones
# ------------------------------------------------------------

DROP TABLE IF EXISTS `constelaciones`;

CREATE TABLE `constelaciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `IdPlaneta` int(11) DEFAULT NULL,
  `IdConstelacion` int(11) DEFAULT NULL,
  `IdGalaxia` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IdPlaneta` (`IdPlaneta`),
  KEY `IdConstelacion` (`IdConstelacion`),
  KEY `IdGalaxia` (`IdGalaxia`),
  CONSTRAINT `constelaciones_ibfk_1` FOREIGN KEY (`IdPlaneta`) REFERENCES `planetas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `constelaciones_ibfk_2` FOREIGN KEY (`IdConstelacion`) REFERENCES `constelaciones` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `constelaciones_ibfk_3` FOREIGN KEY (`IdGalaxia`) REFERENCES `galaxias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `constelaciones` WRITE;
/*!40000 ALTER TABLE `constelaciones` DISABLE KEYS */;

INSERT INTO `constelaciones` (`id`, `nombre`, `tipo`, `createdAt`, `updatedAt`, `IdPlaneta`, `IdConstelacion`, `IdGalaxia`, `status`)
VALUES
	(11,'home','vista','2018-10-23 00:55:57','2018-11-10 21:30:38',NULL,NULL,1,1),
	(12,'sliders','seccion','2018-10-23 00:56:29','2018-11-10 21:30:41',NULL,11,1,1),
	(13,'ofertas','slider','2018-10-23 00:56:58','2018-10-23 00:56:58',20,12,1,1),
	(14,'espacios','slider','2018-10-23 00:57:15','2018-10-23 00:57:15',27,12,1,1),
	(15,'categorias','seccion','2018-10-23 01:00:49','2018-10-23 01:00:49',2,12,1,1),
	(16,'categoria','slider','2018-10-23 01:01:35','2018-10-23 01:01:35',2,15,1,1),
	(17,'busqueda','vista','2018-10-23 01:02:40','2018-10-23 01:02:40',NULL,NULL,1,2),
	(19,'modulos','seccion','2018-10-23 01:07:13','2018-10-23 01:07:26',NULL,17,1,1),
	(20,'modulo','componente','2018-10-23 01:12:45','2018-10-23 01:15:21',NULL,19,1,1),
	(21,'categorias','lista','2018-10-23 01:13:23','2018-10-23 01:13:23',2,17,1,1),
	(22,'productos','grid','2018-10-23 01:14:03','2018-10-23 01:14:03',1,17,1,1),
	(23,'fichaproducto','ficha','2018-10-23 01:14:45','2018-10-23 01:14:45',1,NULL,1,1),
	(24,'categoria','individual','2018-10-23 01:15:38','2018-10-23 01:15:38',2,21,1,1),
	(25,'perfilproducto','perfil','2018-10-23 01:16:46','2018-10-23 01:16:46',NULL,NULL,1,1),
	(26,'relacionados','lista','2018-10-23 01:17:32','2018-10-23 01:17:32',1,25,1,1),
	(27,'producto','producto','2018-10-23 01:18:35','2018-10-23 01:18:35',1,25,1,1),
	(28,'ambientes','lista','2018-10-23 01:19:05','2018-11-07 16:05:24',27,25,1,1),
	(29,'ambiente','individual','2018-10-23 01:19:54','2018-10-23 01:19:54',27,28,1,1),
	(30,'espacios','vista','2018-10-23 01:21:34','2018-10-23 01:21:34',NULL,NULL,1,1),
	(31,'ambientes','grid','2018-10-23 01:21:51','2018-11-11 00:10:16',27,30,1,1),
	(32,'home','vista','2018-10-23 20:42:42','2018-10-23 20:42:42',NULL,NULL,2,0),
	(33,'fichacategoria','ficha','2018-11-01 21:28:27','2018-11-01 21:28:27',2,NULL,1,1),
	(34,'espacio','simple','2018-11-02 00:23:10','2018-11-02 00:23:10',27,14,1,1),
	(35,'precio','componente','2018-11-02 17:38:15','2018-11-10 21:30:00',NULL,17,1,1),
	(36,'version','componente','0000-00-00 00:00:00','0000-00-00 00:00:00',9,23,1,1),
	(37,'linea','componente','2018-11-06 22:24:28','2018-11-06 22:24:28',14,27,1,1),
	(38,'gama','componente','2018-11-06 22:24:36','2018-11-06 22:24:36',13,27,1,1),
	(39,'version','componente','2018-11-06 22:24:49','2018-11-06 22:24:49',9,27,1,1),
	(40,'imagenes','componente','2018-11-06 22:25:06','2018-11-07 16:04:06',4,27,1,1),
	(41,'menu','vista','2018-11-08 01:27:20','2018-11-08 01:27:20',NULL,NULL,1,2),
	(43,'categorias','lista','2018-11-08 02:31:49','2018-11-08 02:31:49',2,41,1,1),
	(44,'categoria','componente','2018-11-08 03:48:13','2018-11-08 03:48:13',NULL,43,1,1),
	(45,'anuncios','seccion','2018-11-12 19:10:11','2018-11-12 19:10:11',NULL,11,1,1),
	(46,'anuncio','seccion','2018-11-12 19:10:42','2018-11-12 19:10:42',NULL,45,1,1),
	(47,'banners','seccion','2018-11-12 19:17:31','2018-11-14 21:08:54',NULL,11,1,1),
	(48,'banner','seccion','2018-11-12 19:17:55','2018-11-14 21:08:54',NULL,47,1,1),
	(49,'productos','vista','2018-11-14 21:41:58','2018-11-22 23:43:14',NULL,NULL,2,2),
	(50,'otros','vista','2018-11-14 21:42:29','2018-11-14 21:50:18',NULL,NULL,2,0),
	(51,'ambientes','vista','2018-11-14 21:42:54','2018-11-14 21:45:29',NULL,NULL,2,0),
	(52,'sucursales','vista','2018-11-14 21:43:22','2018-11-14 21:43:22',NULL,NULL,2,0),
	(53,'promociones','vista','2018-11-14 21:44:48','2018-11-14 21:45:18',NULL,NULL,2,0),
	(54,'usuarios','vista','2018-11-14 21:44:55','2018-11-14 21:44:55',NULL,NULL,2,0),
	(55,'buscador','componente','2018-11-14 22:24:31','2018-11-14 22:24:31',NULL,41,1,1),
	(56,'portada','componente','2018-11-14 23:06:22','2018-11-14 23:06:22',5,55,1,1),
	(57,'autoproducto','autocomplete','2018-11-15 00:14:52','2018-11-15 00:14:52',1,49,2,1),
	(58,'autocategoria','autocomplete','2018-11-15 00:15:01','2018-11-15 00:15:01',2,49,2,1),
	(59,'autoversion','autocomplete','2018-11-15 00:15:23','2018-11-15 00:15:23',9,49,2,1),
	(60,'automarca','autocomplete','2018-11-15 00:15:35','2018-11-15 00:15:35',12,49,2,1),
	(61,'autolinea','autocomplete','2018-11-15 00:15:46','2018-11-15 00:15:46',14,49,2,1),
	(62,'autogama','autocomplete','2018-11-15 00:15:54','2018-11-15 00:15:54',13,49,2,1),
	(63,'listaproductos','paginacion','2018-11-21 18:19:54','2018-11-21 18:19:54',1,49,2,1),
	(64,'versiones','minilista','2018-11-21 18:32:51','2018-11-21 18:32:51',9,63,2,1),
	(65,'detalleversion','componente','2018-11-21 18:50:48','2018-11-22 23:43:07',9,64,2,1),
	(66,'detalleproducto','componente','2018-11-21 18:51:08','2018-11-22 23:43:07',1,63,2,1),
	(67,'producto','componente','2018-11-21 20:34:34','2018-11-21 20:34:34',1,63,2,1),
	(68,'perfilproducto','perfil','2018-11-22 23:42:55','2018-11-22 23:42:55',1,NULL,2,1),
	(69,'imagen','imagen','2018-11-23 02:13:31','2018-11-23 02:13:31',NULL,68,2,0),
	(70,'producto','formulario','2018-11-23 02:13:50','2018-11-23 02:13:50',1,68,2,1),
	(71,'autocategoria','autocomplete','2018-11-23 02:16:21','2018-11-23 18:18:08',2,70,2,1),
	(72,'automarca','autocomplete','2018-11-23 02:17:09','2018-11-23 18:18:04',12,70,2,1),
	(73,'autolinea','autocomplete','2018-11-23 02:17:20','2018-11-23 18:18:01',14,70,2,1),
	(74,'autogama','autocomplete','2018-11-23 02:17:25','2018-11-23 18:17:59',14,70,2,1),
	(75,'versiones','seccion','2018-11-23 02:17:49','2018-11-23 18:17:57',9,68,2,0),
	(76,'version','seccion','2018-11-23 02:18:32','2018-11-23 02:18:32',9,75,2,0),
	(77,'atributos','seccion','2018-11-23 02:20:05','2018-11-23 02:20:05',10,76,2,0),
	(78,'precio','seccion','2018-11-23 02:20:34','2018-11-23 02:20:34',24,76,2,0),
	(79,'existencia','seccion','2018-11-23 17:38:13','2018-11-23 17:38:13',26,76,2,0),
	(80,'colores','chip','2018-11-23 18:14:32','2018-11-23 18:14:32',3,70,2,0);

/*!40000 ALTER TABLE `constelaciones` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla dimensiones
# ------------------------------------------------------------

DROP TABLE IF EXISTS `dimensiones`;

CREATE TABLE `dimensiones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `tipo` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `IdPreConstelacion` int(11) DEFAULT NULL,
  `IdSubConstelacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dimensiones_IdSubConstelacion_IdPreConstelacion_unique` (`IdPreConstelacion`,`IdSubConstelacion`),
  KEY `IdSubConstelacion` (`IdSubConstelacion`),
  CONSTRAINT `dimensiones_ibfk_1` FOREIGN KEY (`IdPreConstelacion`) REFERENCES `constelaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `dimensiones_ibfk_2` FOREIGN KEY (`IdSubConstelacion`) REFERENCES `constelaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `dimensiones` WRITE;
/*!40000 ALTER TABLE `dimensiones` DISABLE KEYS */;

INSERT INTO `dimensiones` (`id`, `nombre`, `tipo`, `createdAt`, `updatedAt`, `IdPreConstelacion`, `IdSubConstelacion`)
VALUES
	(3,NULL,NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',22,23),
	(4,NULL,NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',15,23),
	(5,NULL,NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',16,33),
	(6,NULL,NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',26,23);

/*!40000 ALTER TABLE `dimensiones` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla galaxias
# ------------------------------------------------------------

DROP TABLE IF EXISTS `galaxias`;

CREATE TABLE `galaxias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `galaxias` WRITE;
/*!40000 ALTER TABLE `galaxias` DISABLE KEYS */;

INSERT INTO `galaxias` (`id`, `nombre`, `tipo`, `createdAt`, `updatedAt`)
VALUES
	(1,'main',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(2,'admin',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00');

/*!40000 ALTER TABLE `galaxias` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla meteoros
# ------------------------------------------------------------

DROP TABLE IF EXISTS `meteoros`;

CREATE TABLE `meteoros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `IdPlaneta` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IdPlaneta` (`IdPlaneta`),
  CONSTRAINT `meteoros_ibfk_1` FOREIGN KEY (`IdPlaneta`) REFERENCES `planetas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `meteoros` WRITE;
/*!40000 ALTER TABLE `meteoros` DISABLE KEYS */;

INSERT INTO `meteoros` (`id`, `nombre`, `tipo`, `createdAt`, `updatedAt`, `IdPlaneta`)
VALUES
	(1,'asasdasd','STRING','2018-10-23 23:20:35','2018-10-23 23:20:35',NULL),
	(3,'nombre','STRING','2018-10-23 23:46:44','2018-10-23 23:46:44',1),
	(5,'nombre','STRING','2018-10-23 23:56:05','2018-10-23 23:56:05',27),
	(6,'nombre','STRING','2018-10-23 23:56:26','2018-10-23 23:56:26',10),
	(7,'nombre','STRING','2018-10-23 23:58:22','2018-10-23 23:58:22',2),
	(8,'nivel','INTEGER','2018-10-23 23:58:31','2018-10-23 23:58:31',2),
	(9,'nombre','STRING','2018-10-23 23:59:50','2018-10-23 23:59:50',3),
	(10,'hex','STRING','2018-10-24 00:00:00','2018-10-24 00:00:00',3),
	(11,'status','INTEGER','2018-10-24 00:00:11','2018-10-24 00:00:11',3),
	(12,'nombre','STRING','2018-10-24 00:00:38','2018-10-24 00:00:38',29),
	(13,'cantidad','INTEGER','2018-10-24 00:01:00','2018-10-24 00:01:00',19),
	(14,'status','INTEGER','2018-10-24 00:01:06','2018-10-24 00:01:06',19),
	(15,'oferta','INTEGER','2018-10-24 00:01:41','2018-10-24 00:01:41',18),
	(16,'descuento','INTEGER','2018-10-24 00:01:53','2018-10-24 00:01:53',18),
	(17,'cantidad','INTEGER','2018-10-24 00:02:14','2018-10-24 00:02:14',22),
	(18,'link','TEXT','2018-10-24 00:02:36','2018-10-24 00:02:36',30),
	(19,'cantidad','INTEGER','2018-10-24 00:02:51','2018-10-24 00:02:51',26),
	(20,'status','INTEGER','2018-10-24 00:03:09','2018-10-24 00:03:09',26),
	(21,'nombre','STRING','2018-10-24 00:03:39','2018-10-24 00:03:39',13),
	(22,'link','TEXT','2018-10-24 00:04:51','2018-10-24 00:04:51',4),
	(23,'clave','STRING','2018-10-24 00:05:25','2018-10-24 00:05:25',23),
	(24,'nombre','STRING','2018-10-24 00:06:12','2018-10-24 00:06:12',14),
	(25,'nombre','STRING','2018-10-24 00:06:26','2018-10-24 00:06:26',12),
	(26,'clave','STRING','2018-10-24 00:06:48','2018-10-24 00:06:48',12),
	(27,'status','INTEGER','2018-10-24 00:06:55','2018-10-24 00:06:55',12),
	(28,'cantidad','INTEGER','2018-10-24 00:07:21','2018-10-24 00:07:21',15),
	(30,'nombre','STRING','2018-10-24 00:08:12','2018-10-24 00:08:12',11),
	(31,'status','INTEGER','2018-10-24 00:08:19','2018-10-24 00:08:19',11),
	(32,'link','STRING','2018-10-24 00:08:56','2018-10-24 00:08:56',5),
	(33,'x','INTEGER','2018-10-24 00:09:07','2018-10-24 00:09:07',28),
	(34,'y','INTEGER','2018-10-24 00:09:14','2018-10-24 00:09:14',28),
	(35,'cantidad','INTEGER','2018-10-24 00:09:30','2018-10-24 00:09:30',24),
	(36,'status','INTEGER','2018-10-24 00:09:38','2018-10-24 00:09:38',24),
	(38,'status','INTEGER','2018-10-24 00:10:57','2018-10-24 00:10:57',1),
	(39,'nombre','STRING','2018-10-24 00:11:21','2018-10-24 00:11:21',17),
	(40,'status','INTEGER','2018-10-24 00:11:28','2018-10-24 00:11:28',17),
	(41,'cantidad','INTEGER','2018-10-24 00:11:47','2018-10-24 00:11:47',21),
	(42,'clave','INTEGER','2018-10-24 00:12:14','2018-10-24 00:12:14',25),
	(43,'nombre','STRING','2018-10-24 00:12:23','2018-10-24 00:12:23',25),
	(44,'status','INTEGER','2018-10-24 00:12:31','2018-10-24 00:12:31',25),
	(46,'calle','STRING','2018-10-24 00:12:57','2018-10-24 00:12:57',25),
	(47,'colonia','STRING','2018-10-24 00:13:10','2018-10-24 00:13:10',25),
	(48,'estado','STRING','2018-10-24 00:13:20','2018-10-24 00:13:20',25),
	(49,'codigopostal','STRING','2018-10-24 00:13:31','2018-10-24 00:13:31',25),
	(50,'latitude','INTEGER','2018-10-24 00:13:42','2018-10-24 00:13:42',25),
	(52,'longitude','INTEGER','2018-10-24 00:14:20','2018-10-24 00:14:20',25),
	(53,'numero','INTEGER','2018-10-24 00:14:27','2018-10-24 00:14:27',25),
	(54,'nombre','STRING','2018-10-24 00:14:59','2018-10-24 00:14:59',9),
	(55,'linea','STRING','2018-10-24 00:15:06','2018-10-24 00:15:06',9),
	(56,'status','INTEGER','2018-10-24 00:15:17','2018-10-24 00:15:17',9),
	(57,'precio','INTEGER','2018-10-24 00:15:23','2018-10-24 00:15:23',9),
	(58,'existencia','INTEGER','2018-10-24 00:15:32','2018-10-24 00:15:32',9),
	(59,'razon','STRING','2018-10-24 00:53:23','2018-10-24 00:53:23',12),
	(60,'nivel','INTEGER','2018-10-24 00:54:45','2018-10-24 00:54:45',15),
	(61,'status','INTEGER','2018-10-24 18:14:52','2018-10-24 18:14:52',2);

/*!40000 ALTER TABLE `meteoros` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla orbitas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `orbitas`;

CREATE TABLE `orbitas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `tipo` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `IdPrePlaneta` int(11) DEFAULT NULL,
  `IdSubPlaneta` int(11) DEFAULT NULL,
  `alias` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `orbitas_IdSubPlaneta_IdPrePlaneta_unique` (`IdPrePlaneta`,`IdSubPlaneta`),
  KEY `IdSubPlaneta` (`IdSubPlaneta`),
  CONSTRAINT `orbitas_ibfk_1` FOREIGN KEY (`IdPrePlaneta`) REFERENCES `planetas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orbitas_ibfk_2` FOREIGN KEY (`IdSubPlaneta`) REFERENCES `planetas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `orbitas` WRITE;
/*!40000 ALTER TABLE `orbitas` DISABLE KEYS */;

INSERT INTO `orbitas` (`id`, `nombre`, `tipo`, `createdAt`, `updatedAt`, `IdPrePlaneta`, `IdSubPlaneta`, `alias`)
VALUES
	(1,'BelongsTo',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',1,2,NULL),
	(2,'BelongsToMany',4,'0000-00-00 00:00:00','0000-00-00 00:00:00',1,3,NULL),
	(3,'HasMany',2,'0000-00-00 00:00:00','0000-00-00 00:00:00',1,4,NULL),
	(4,'HasMany',2,'0000-00-00 00:00:00','2018-10-21 01:57:34',1,5,NULL),
	(5,'HasMany',2,'0000-00-00 00:00:00','0000-00-00 00:00:00',2,1,NULL),
	(6,'BelongsToMany',4,'0000-00-00 00:00:00','0000-00-00 00:00:00',3,1,NULL),
	(7,'BelongsTo',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',4,1,NULL),
	(8,'BelongsTo',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',5,1,NULL),
	(12,'HasMany',2,'2018-10-21 01:46:14','2018-10-21 01:57:45',1,9,NULL),
	(14,'BelongsTo',1,'2018-10-21 01:57:45','2018-10-21 01:57:45',9,1,NULL),
	(15,'BelongsToMany',4,'2018-10-21 16:51:03','2018-10-21 16:51:04',9,11,NULL),
	(16,'BelongsToMany',4,'2018-10-21 16:51:03','2018-10-21 16:51:03',11,9,NULL),
	(17,'BelongsToMany',4,'2018-10-21 16:51:23','2018-10-21 16:51:23',10,2,NULL),
	(18,'BelongsToMany',4,'2018-10-21 16:51:23','2018-10-21 16:51:23',2,10,NULL),
	(19,'HasMany',2,'2018-10-21 16:51:43','2018-10-24 00:35:20',10,11,NULL),
	(20,'BelongsTo',1,'2018-10-21 16:51:43','2018-10-24 00:35:20',11,10,NULL),
	(21,'HasMany',2,'2018-10-22 16:24:53','2018-10-22 16:24:53',12,1,NULL),
	(22,'BelongsTo',1,'2018-10-22 16:24:53','2018-10-22 16:24:53',1,12,NULL),
	(23,'HasMany',2,'2018-10-22 16:28:30','2018-10-22 16:28:30',13,1,NULL),
	(24,'BelongsTo',1,'2018-10-22 16:28:30','2018-10-22 16:28:30',1,13,NULL),
	(25,'HasMany',2,'2018-10-22 16:28:40','2018-10-22 16:28:40',14,1,NULL),
	(26,'BelongsTo',1,'2018-10-22 16:28:40','2018-10-22 16:28:40',1,14,NULL),
	(27,'BelongsTo',1,'2018-10-22 16:29:08','2018-10-24 00:43:37',13,12,NULL),
	(28,'HasMany',2,'2018-10-22 16:29:08','2018-10-24 00:43:37',12,13,NULL),
	(29,'BelongsTo',1,'2018-10-22 16:29:20','2018-10-24 00:43:40',14,12,NULL),
	(30,'HasMany',2,'2018-10-22 16:29:20','2018-10-24 00:43:40',12,14,NULL),
	(31,'HasMany',2,'2018-10-22 16:31:58','2018-10-22 16:31:58',12,15,NULL),
	(32,'BelongsTo',1,'2018-10-22 16:31:58','2018-10-22 16:31:58',15,12,NULL),
	(33,'BelongsToMany',4,'2018-10-22 16:32:07','2018-10-22 16:32:07',15,1,NULL),
	(34,'BelongsToMany',4,'2018-10-22 16:32:07','2018-10-22 16:32:07',1,15,NULL),
	(35,'HasMany',2,'2018-10-23 00:07:11','2018-10-23 00:07:11',12,16,NULL),
	(36,'BelongsTo',1,'2018-10-23 00:07:11','2018-10-23 00:07:11',16,12,NULL),
	(37,'Especial',5,'2018-10-23 00:11:15','2018-10-30 18:06:06',18,1,'Productos'),
	(38,'Nodo',7,'2018-10-23 00:11:15','2018-10-30 18:06:06',1,18,NULL),
	(39,'Especial',5,'2018-10-23 00:11:19','2018-10-30 18:06:20',18,17,'Promos'),
	(40,'Nodo',7,'2018-10-23 00:11:19','2018-10-30 18:06:20',17,18,NULL),
	(41,'HasMany',2,'2018-10-23 00:16:35','2018-10-23 00:16:35',17,19,NULL),
	(42,'BelongsTo',1,'2018-10-23 00:16:35','2018-10-23 00:16:35',19,17,NULL),
	(43,'HasMany',2,'2018-10-23 00:16:38','2018-10-23 00:16:38',17,20,NULL),
	(44,'BelongsTo',1,'2018-10-23 00:16:38','2018-10-23 00:16:38',20,17,NULL),
	(45,'BelongsToMany',4,'2018-10-23 00:17:01','2018-10-23 00:17:01',19,9,NULL),
	(46,'BelongsToMany',4,'2018-10-23 00:17:01','2018-10-23 00:17:01',9,19,NULL),
	(47,'Nodo',7,'2018-10-23 00:18:13','2018-10-30 17:56:03',20,21,NULL),
	(48,'Especial',5,'2018-10-23 00:18:13','2018-10-30 17:56:03',21,20,'Salientes'),
	(49,'Nodo',7,'2018-10-23 00:18:15','2018-10-30 17:56:24',20,22,NULL),
	(50,'Especial',5,'2018-10-23 00:18:15','2018-10-30 17:56:24',22,20,'Entrantes'),
	(51,'Nodo',7,'2018-10-23 00:18:28','2018-10-30 17:55:59',9,21,NULL),
	(52,'Especial',5,'2018-10-23 00:18:28','2018-10-30 17:55:59',21,9,'Salientes'),
	(53,'Nodo',7,'2018-10-23 00:18:35','2018-10-30 17:56:53',9,22,NULL),
	(54,'Especial',5,'2018-10-23 00:18:35','2018-10-30 17:56:53',22,9,'Entrantes'),
	(55,'Nodo',7,'2018-10-23 00:19:46','2018-10-30 17:58:31',9,23,NULL),
	(56,'Especial',5,'2018-10-23 00:19:46','2018-10-30 17:58:31',23,9,'Versiones'),
	(57,'BelongsToMany',4,'2018-10-23 00:20:06','2018-10-23 00:20:06',24,23,NULL),
	(58,'BelongsToMany',4,'2018-10-23 00:20:06','2018-10-23 00:20:06',23,24,NULL),
	(59,'Nodo',7,'2018-10-23 00:20:42','2018-10-30 17:58:44',25,23,NULL),
	(60,'Especial',5,'2018-10-23 00:20:42','2018-10-30 17:58:44',23,25,'Sucursales'),
	(61,'BelongsToMany',4,'2018-10-23 00:23:41','2018-10-23 00:23:41',23,26,NULL),
	(62,'BelongsToMany',4,'2018-10-23 00:23:41','2018-10-23 00:23:41',26,23,NULL),
	(63,'Nodo',7,'2018-10-23 00:25:19','2018-10-30 18:04:00',27,28,NULL),
	(64,'Especial',5,'2018-10-23 00:25:19','2018-10-30 18:04:00',28,27,'Ambientes'),
	(65,'Nodo',7,'2018-10-23 00:25:36','2018-10-30 18:03:55',1,28,NULL),
	(66,'Especial',5,'2018-10-23 00:25:36','2018-10-30 18:03:55',28,1,'Productos'),
	(67,'HasMany',2,'2018-10-23 00:28:46','2018-10-23 00:28:46',29,27,NULL),
	(68,'BelongsTo',1,'2018-10-23 00:28:46','2018-10-23 00:28:46',27,29,NULL),
	(69,'HasMany',2,'2018-10-23 00:29:05','2018-10-23 00:29:05',27,30,NULL),
	(70,'BelongsTo',1,'2018-10-23 00:29:05','2018-10-23 00:29:05',30,27,NULL),
	(71,'Recursiva',6,'2018-10-24 18:15:00','2018-10-25 00:52:43',2,2,NULL);

/*!40000 ALTER TABLE `orbitas` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla planetas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `planetas`;

CREATE TABLE `planetas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orden` int(11) DEFAULT NULL,
  `plural` varchar(255) DEFAULT NULL,
  `singular` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `planetas` WRITE;
/*!40000 ALTER TABLE `planetas` DISABLE KEYS */;

INSERT INTO `planetas` (`id`, `orden`, `plural`, `singular`, `createdAt`, `updatedAt`)
VALUES
	(1,1,'productos','producto','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(2,2,'categorias','categoria','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(3,3,'colores','color','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(4,4,'imagenes','imagen','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(5,5,'portadas','portada','0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(9,6,'versiones','version','2018-10-21 00:48:19','2018-10-21 00:48:19'),
	(10,7,'atributos','atributo','2018-10-21 16:49:25','2018-10-21 16:49:25'),
	(11,8,'opciones','opcion','2018-10-21 16:50:46','2018-10-21 16:50:46'),
	(12,9,'marcas','marca','2018-10-22 16:22:12','2018-10-22 16:22:12'),
	(13,10,'gamas','gama','2018-10-22 16:25:38','2018-10-22 16:25:38'),
	(14,11,'lineas','linea','2018-10-22 16:25:46','2018-10-22 16:25:46'),
	(15,12,'margenes','margen','2018-10-22 16:31:22','2018-10-22 16:31:22'),
	(16,13,'catalogos','catalogo','2018-10-23 00:07:01','2018-10-23 00:07:01'),
	(17,14,'promos','promo','2018-10-23 00:10:41','2018-10-23 00:10:41'),
	(18,15,'disponibles','disponible','2018-10-23 00:11:04','2018-10-23 00:11:04'),
	(19,16,'descuentos','descuento','2018-10-23 00:13:24','2018-10-23 00:13:24'),
	(20,17,'ofertas','oferta','2018-10-23 00:13:30','2018-10-23 00:13:30'),
	(21,18,'salientes','saliente','2018-10-23 00:17:50','2018-10-23 00:17:50'),
	(22,19,'entrantes','entrante','2018-10-23 00:17:55','2018-10-23 00:17:55'),
	(23,20,'inventarios','inventario','2018-10-23 00:19:31','2018-10-23 00:19:31'),
	(24,21,'precios','precio','2018-10-23 00:19:58','2018-10-23 00:19:58'),
	(25,22,'sucursales','sucursal','2018-10-23 00:20:23','2018-10-23 00:20:23'),
	(26,23,'existencias','existencia','2018-10-23 00:23:29','2018-10-23 00:23:29'),
	(27,24,'ambientes','ambiente','2018-10-23 00:24:38','2018-10-23 00:24:38'),
	(28,25,'posiciones','posicion','2018-10-23 00:25:01','2018-10-23 00:25:01'),
	(29,26,'cuartos','cuarto','2018-10-23 00:27:54','2018-10-23 00:27:54'),
	(30,27,'espacios','espacio','2018-10-23 00:28:54','2018-10-23 00:28:54');

/*!40000 ALTER TABLE `planetas` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla satelites
# ------------------------------------------------------------

DROP TABLE IF EXISTS `satelites`;

CREATE TABLE `satelites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `ruta_back` varchar(255) DEFAULT NULL,
  `ruta_front` varchar(255) DEFAULT NULL,
  `descripcion` text,
  `contenido` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `IdPlaneta` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `params` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IdPlaneta` (`IdPlaneta`),
  CONSTRAINT `satelites_ibfk_1` FOREIGN KEY (`IdPlaneta`) REFERENCES `planetas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `satelites` WRITE;
/*!40000 ALTER TABLE `satelites` DISABLE KEYS */;

INSERT INTO `satelites` (`id`, `nombre`, `ruta_back`, `ruta_front`, `descripcion`, `contenido`, `createdAt`, `updatedAt`, `IdPlaneta`, `status`, `tipo`, `params`)
VALUES
	(1,'ultimoproducto','ultimoproductoXcategoria/:id','ultimoproductoXcategoria/\' + id','Hace algo maravilloso','import { Producto } from \'../../producto/modelo\'\n\nmodule.exports = (req, res, next) => {\n    // function jerarquia(){\n    // var items = categoria.findAll().then(response => response.map(n => n.get({plan : true})))\n    // var buscar = (array, id) => array.filter(n => n.IdCategoria === id).map(n => [  n.id, buscar(array, n.id) ])\n    // return {\n    //     subniveles : (id) => new Promise((resolve) => {\n    //         items.then(response => {\n    //             resolve(  _.flattenDeep([ Number(id) , buscar(response, Number(id)) ])   )\n    //         })\n    //     })\n    // }\n    Producto.findById(1)\n    .then(result => res.status(200).jsonp(result))\n}\n\n\n// jerarquia().subniveles(req.params.id)\n//     .then(response => producto.findOne({ where : { IdCategoria:  response, status : 1}}))\n//\n//\n// 	.then(result => res.status(200).jsonp(result))\n// }\n\n    .then(response => producto.findOne({ where : { IdCategoria:  response, status : 1}}))\n\n\n	.then(result => res.status(200).jsonp(result))','2018-11-01 02:54:04','2018-11-01 19:16:18',2,1,'get','id'),
	(2,'disponibles','disponibles','disponibles\'','Obtiene todos los que tengan status 1','Color.findAll({where : {status : 1}})\n    .then(response => res.status(200).jsonp(response))','2018-11-02 17:37:05','2018-11-02 18:43:38',3,1,'get',NULL),
	(3,'disponibles','disponibles','disponibles\'',NULL,'Marca.findAll({where : {status : 1}})\n    .then(response => res.status(200).jsonp(response))','2018-11-02 18:15:12','2018-11-02 18:43:58',12,1,'get',NULL),
	(4,'nivel','nivel/:id','nivel/\' + id','Obtiene todos las categorias de cierto nivel','Categoria.findAll({where : { nivel : req.params.id}})\n    .then(response => res.status(200).jsonp(response))','2018-11-02 19:19:43','2018-11-02 19:19:43',2,1,'get','id'),
	(5,'filtro','filtro','filtro/\', peticion','filtro que recibe marcas, colores, opciones, precios y otros cosas','Producto.findAll()\n.then(response => resolve(response))','2018-11-05 18:27:53','2018-11-05 18:27:53',1,1,'put','peticion'),
	(6,'opcionesdisponibles','opcionesdisponibles/:id','opcionesdisponibles/\' + id','Obtiene todas las opciones disponibles de una versión','Version.findById(req.params.id)\n.then(item => item.$get(\'Opciones\', { where : {  status : 1  } }))\n.then(response => resolve(response))','2018-11-06 20:29:51','2018-11-06 20:31:41',9,1,'get','id'),
	(7,'versionesdisponibles','versionesdisponibles/:id','versionesdisponibles/\' + id','Obtiene las versiones disponibles de un producto','Producto.findById(req.params.id)\n.then(item => item.$get(\'Versiones\', { where : {  status : 1  } }))\n.then(response => resolve(response))','2018-11-06 20:39:47','2018-11-06 20:39:47',1,1,'get','id'),
	(8,'precios','precios/:id','precios/\' + id','Obtiene los inventarios y luego los precios','Version.findById(req.params.id)\n    .then(item => item.$get(\'Inventarios\'))\n    .then(items => Promise.all(items.map( async (n) => n.$get(  \'Precios\'  ))))\n.then(response =>resolve(response))','2018-11-06 20:57:42','2018-11-06 20:57:42',9,1,'get','id'),
	(9,'ambientes','ambientes/:id','ambientes/\' + id','Obtiene todos los ambientes de una gama',NULL,'2018-11-07 15:55:56','2018-11-07 15:55:56',13,1,'get','id'),
	(10,'xNombre','xNombre','xNombre/\', nombre','Se buscan los productos por el nombre',NULL,'2018-11-11 22:16:03','2018-11-11 22:16:03',1,1,'put','nombre'),
	(11,'xNombre','xNombre','xNombre/\', nombre','Se buscan los items por el nombre','Linea.findAll({\n                where : {\n                    nombre : {\n                        $like :  \'%\' + req.body.nombre + \'%\',\n                    },\n                    status : req.body.status\n                }\n            })','2018-11-15 00:43:04','2018-11-15 00:43:04',14,1,'put','nombre'),
	(12,'xNombre','xNombre','xNombre/\', nombre','Se buscan los items por el nombre','Categoria.findAll({\n                where : {\n                    nombre : {\n                        $like :  \'%\' + req.body.nombre + \'%\',\n                    },\n                    status : req.body.status\n                }\n            })','2018-11-15 00:43:34','2018-11-15 00:44:22',2,1,'put','nombre'),
	(13,'xNombre','xNombre','xNombre/\', nombre','Se buscan los items por el nombre','Gama.findAll({\n                where : {\n                    nombre : {\n                        $like :  \'%\' + req.body.nombre + \'%\',\n                    },\n                    status : req.body.status\n                }\n            })','2018-11-15 00:43:49','2018-11-15 00:43:49',13,1,'put','nombre'),
	(14,'xNombre','xNombre','xNombre/\', nombre','Se buscan los items por el nombre','Version.findAll({\n                where : {\n                    nombre : {\n                        $like :  \'%\' + req.body.nombre + \'%\',\n                    },\n                    status : req.body.status\n                }\n            })','2018-11-15 00:44:54','2018-11-15 00:44:54',9,1,'put','nombre'),
	(15,'xNombre','xNombre','xNombre/\', nombre','Se buscan los items por el nombre','Marca.findAll({\n                where : {\n                    nombre : {\n                        $like :  \'%\' + req.body.nombre + \'%\',\n                    },\n                    status : req.body.status\n                }\n            })','2018-11-15 00:46:09','2018-11-15 00:46:09',12,1,'put','nombre'),
	(16,'completo','completo/','completo/\'','Obtiene las categorias con un slash','function detective(guia, hijo){\n        let papa = guia.find(n => n.id === hijo.IdCategoria)\n        return papa ? papa.nombre +  \' / \' + hijo.nombre : hijo.nombre\n    }\n\n    Categoria.findAll()\n    .then(response => response.map(n =>  Object.assign(n, { nombre : detective(response, n) })))\n	.then(result => resolve(result))','2018-11-22 00:34:59','2018-11-22 00:34:59',2,1,'get',NULL),
	(17,'procesos','procesos/','procesos/\'','Obtiene los procesos','ex.procesos =  (req, res, next) => Promise.all([\n		producto.count(),\n		producto.count({where : { status : 1  }}),\n		producto.count({where : { status : 2  }}),\n		producto.count({where : { status : 3  }}),\n		producto.count({where : { status : 4  }}),\n		producto.count({where : { status : 5  }}),\n		producto.count({where : { status : 6  }}),\n		producto.count({where : { status : 0 }})\n	])\n	.then(result => resolve(result))','2018-11-22 00:37:43','2018-11-22 00:37:43',1,1,'get',NULL);

/*!40000 ALTER TABLE `satelites` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
