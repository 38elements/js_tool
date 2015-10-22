"use strict";

var gulp = require("gulp");
var del = require("del");
var vinylPaths = require("vinyl-paths");

module.exports = function(option) {
    gulp.task("clean-test-dist", function (callback) {
        return gulp.src(option.test_dist, {read: false})
        .pipe(vinylPaths(del));
    });
    gulp.task("clean-dist", function (callback) {
        return gulp.src(option.dist, {read: false})
        .pipe(vinylPaths(del));
    });
    gulp.task("clean-tmp", function (callback) {
        return gulp.src(option.tmp, {read: false})
        .pipe(vinylPaths(del));
    });
    gulp.task("clean", ["clean-dist", "clean-tmp"], function () {
    });
};
