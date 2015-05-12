"use strict";

var gulp = require("gulp");
var rimraf = require("gulp-rimraf");


module.exports = function(option) {
    gulp.task("clean-test-dist", function (callback) {
        return gulp.src(option.test_dist, {read: false})
        .pipe(rimraf({force: true}, callback));
    });
    gulp.task("clean-dist", function (callback) {
        return gulp.src(option.dist, {read: false})
        .pipe(rimraf({force: true}, callback));
    });
    gulp.task("clean-tmp", function (callback) {
        return gulp.src(option.tmp, {read: false})
        .pipe(rimraf({force: true}, callback));
    });
    gulp.task("clean", ["clean-dist", "clean-tmp"], function () {
    });
};
