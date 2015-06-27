"use strict";

var gulp = require("gulp");
var browserSync = require("browser-sync");

module.exports = function(option) {
    var routes = {
        "/bower_components": "bower_components"
    };
    var server = {
        baseDir: option.tmp,
        routes: routes
    };
    var bs = browserSync.create();
    gulp.task("server-start", ["copy"], function() {
        bs.init({
            server: server,
            port: option.port
        });
    });
    gulp.task("server-reload", ["copy"], function() {
        bs.reload();
    });
};
