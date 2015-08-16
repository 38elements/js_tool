"use strict";

var gulp = require("gulp");
var wrench = require("wrench");
var runSequence = require("run-sequence");

var option = {
    tmp: "tmp", 
    src: "src", 
    dist: "dist", 
    test: "test", 
    test_dist: "test-dist", 
    port: 4000

};

wrench.readdirSyncRecursive("./gulp").filter(function(file) {
    return (/\.js$/i).test(file);
}).map(function(file) {
    require("./gulp/" + file)(option);
});

gulp.task("default", function (callback) {
    runSequence("clean", "eslint", "babel-src", "webpack-src", "watch", "server-start", callback);
});
