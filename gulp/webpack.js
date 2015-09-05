"use strict";

var gulp = require("gulp");
var webpack = require("webpack-stream");


module.exports = function(option) {
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
