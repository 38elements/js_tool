"use strict";

var gulp = require("gulp");
var runSequence = require("run-sequence");

module.exports = function(option) {
    gulp.task("watch", function() {
        gulp.watch([option.src + "/**/*.es6", option.src + "/index.html"], function(event) {
            return runSequence("clean", "eslint", "babel", "webpack-src", "server-reload");
        });
    });
};
