"use strict";

var gulp = require("gulp");
var eslint = require("gulp-eslint");

module.exports = function(option) {
    gulp.task("eslint", function () {
        return gulp.src(option.src + "/**/*.es6")
        .pipe(eslint({
            "useEslintrc": true
        }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
    });
};
