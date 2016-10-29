'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');

var proxyMiddleware = require('http-proxy-middleware');
var modRewrite = require('connect-modrewrite');

var http = require('http'),
    httpProxy = require('http-proxy'),
    express = require('express');

var _ = require('lodash');

var express = require('express');
var compress = require('compression');
var proxy;

// var proxy = proxyMiddleware('/api',{'target': 'http://localhost:4000','ws':true});

var createServer = function() {
  var app = express();

  app.use(compress());

  proxy = httpProxy.createProxyServer({
    ws: true,
    target: {
      'host': 'localhost',
      'port': '4000'
    }
   });

  // proxy HTTP GET / POST
  app.get('/socket.io/*', function(req, res) {
    proxy.web(req, res);
  });
  app.post('/socket.io/*', function(req, res) {
    proxy.web(req, res);
  });

  // Proxy websockets
  app.on('upgrade', function (req, socket, head) {
    proxy.ws(req, socket, head);
  });

  app.use(modRewrite([
    '^/api/(.*)$ http://localhost:4000/$1 [P]'
  ]));

  return app;
};

var configStatics = function(app,statics) {
  _.keys(statics).forEach(function(staticKey) {
    app.use(staticKey,statics[staticKey]);
  });
};


browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve',['watch','standard']);

gulp.task('standard', function () {
  // create a server
  var app = createServer();

  // serve static content
  configStatics(app,{
    '/': express.static(conf.paths.tmp+'/serve'),
    '/bower_components': express.static(__dirname + '/../bower_components'),
    '/app': express.static(__dirname + '/../src/app'),
    '/assets': express.static(__dirname + '/../src/assets')
  });

  // This route deals enables HTML5Mode by forwarding missing files to the index.html
  app.all('/*', function(req, res) {
    var indexPath = path.resolve(conf.paths.tmp+'/serve/index.html');
    res.sendFile(indexPath);
  });

  var server = require('http').createServer(app);
  server.on('upgrade', function (req, socket, head) {
    proxy.ws(req, socket, head);
  });
  server.listen(9000);
});

gulp.task('serve:dist', ['build'], function () {
  // create a server
  var app = createServer();

  // serve static content
  configStatics(app,{
    '/': express.static(conf.paths.dist),
    // '/bower_components': express.static(__dirname + '/../bower_components'),
    '/scripts': express.static(conf.paths.dist+'/scripts'),
    '/styles': express.static(conf.paths.dist+'/styles'),
    '/fonts': express.static(conf.paths.dist+'/fonts'),
    '/maps': express.static(conf.paths.dist+'/maps'),
    '/assets': express.static(conf.paths.dist+'/assets'),
    '/favicon.ico': express.static(conf.paths.dist+'/favicon.ico')
  });

  // This route deals enables HTML5Mode by forwarding missing files to the index.html
  app.all('/*', function(req, res) {
    var indexPath = path.resolve(conf.paths.dist+'/index.html');
    res.sendFile(indexPath);
  });

  var server = require('http').createServer(app);
  server.on('upgrade', function (req, socket, head) {
    proxy.ws(req, socket, head);
  });
  server.listen(9000);
});

gulp.task('serve:e2e', ['inject'], function () {
  // browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  // browserSyncInit(conf.paths.dist, []);
});
