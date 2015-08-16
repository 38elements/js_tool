"use strict";

var gulp = require("gulp");
var babel = require("gulp-babel");
var webpack = require("gulp-webpack");


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
    gulp.task("webpack-src", function () {
        return gulp.src(option.dist + "/foo.js")
        .pipe(webpack({
            output: {
                filename: "app.js"
            }
        }))
        .pipe(gulp.dest(option.dist))
        .pipe(gulp.dest(option.tmp));
    });
    gulp.task("webpack-test", function () {
        return gulp.src(option.test_dist + "/foo.spec.js")
        .pipe(webpack({
            output: {
                filename: "test.js"
            }
        }))
        .pipe(gulp.dest(option.test_dist))
    });
    gulp.task("babel", ["babel-src", "babel-test"], function () {
    });
};
