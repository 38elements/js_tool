"use strict";

var gulp = require("gulp");
let glob = require("glob");
var runSequence = require("run-sequence");

var option = {
    tmp: "tmp", 
    src: "src", 
    dist: "dist", 
    test: "test", 
    test_dist: "test-dist", 
    port: 4000

};

let file_names = glob.sync("./gulp/**/*.js");
file_names.map(function(name) {
    require(name)(option);
});

gulp.task("default", function (callback) {
    runSequence("clean", "eslint", "babel-src", "webpack-src", "watch", "server-start", callback);
});
