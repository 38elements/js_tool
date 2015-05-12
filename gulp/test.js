"use strict";

var gulp = require("gulp");
var karma = require("karma").server;

module.exports = function(option) {
    gulp.task("unit-test", ["babel"], function(done) {
        karma.start({
            "configFile": __dirname + "/../karma.conf.js",
            "singleRun": true
        }, done);
    });
};
