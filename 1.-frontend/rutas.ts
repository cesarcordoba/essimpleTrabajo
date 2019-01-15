import * as sm from 'sitemap'
import { Router } from "express";


const definidos = new Router()


var sitemap = sm.createSitemap ({
    hostname: 'https://www.elgigantedelosazulejos.com.mx//',
    cacheTime: 600000,
    urls: [
        { url: '/',  changefreq: 'daily', priority: 0.3 },
        { url: '/busqueda',  changefreq: 'daily', priority: 0.3 },
        { url: '/espacios',  changefreq: 'daily', priority: 0.3 }
    ]
});


definidos
.get('/robots.txt', function (req, res) {
    res
    .type('text/plain')
    .send("User-agent: *");
})
.get('/sitemap.xml', (req, res) => sitemap.toXML( function (err, xml) {
  if (err) {
      return res.status(500).end();
  }
  res
      .header('Content-Type', 'application/xml')
      .render( xml );
}))

export default definidos
