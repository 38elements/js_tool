"use strict";

var gulp = require("gulp");
var babel = require("gulp-babel");


module.exports = function(option) {
    gulp.task("babel-test", function () {
        return gulp.src(option.test + "/**/*.es6")
        .pipe(babel({
            "stage": 0,
            "loose": ["all"],
            "retainLines": true
        }))
        .pipe(gulp.dest(option.test_dist))
    });
    gulp.task("babel-src", function () {
        return gulp.src(option.src + "/**/*.es6")
        .pipe(babel({
            "stage": 0,
            "loose": ["all"],
            "retainLines": true
        }))
        .pipe(gulp.dest(option.dist))
        .pipe(gulp.dest(option.tmp));
    });
};
