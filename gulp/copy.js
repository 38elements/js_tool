"use strict";

var gulp = require("gulp");

module.exports = function(option) {
    gulp.task("copy-index.html", function() {
        gulp.src("src/index.html")
        .pipe(gulp.dest(option.tmp))
    });
    gulp.task("copy-browser-polyfill.js", function() {
        gulp.src("node_modules/babel-core/browser-polyfill.js")
        .pipe(gulp.dest(option.tmp))
        .pipe(gulp.dest(option.dist))
    });
    gulp.task("copy", ["copy-index.html", "copy-browser-polyfill.js"], function() {
    });
};
