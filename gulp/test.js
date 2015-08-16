"use strict";

var gulp = require("gulp");
var karma = require("karma").server;
var runSequence = require("run-sequence");

module.exports = function(option) {
    gulp.task("execute-unit-test", function(done) {
        karma.start({
            "configFile": __dirname + "/../karma.conf.js",
            "singleRun": true
        }, done);
    });
    gulp.task("unit-test", function(callback) {
        return runSequence("clean", "eslint", "babel", "webpack-test", "execute-unit-test", callback);
    });
};
