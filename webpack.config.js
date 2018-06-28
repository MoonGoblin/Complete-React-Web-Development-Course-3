const path = require("path");

// entry -> output
// where is the entry point? app.js inside src -> where is output?
// this is in this file

//console.log(path.join(__dirname, "public"));

// exposes object to another file in node
module.exports = {
    entry: "./src/app.js", // where it should start
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    }
};
// path is an absolute path!!!
// variable makes easier!!
// use console.log(__dirname);
// (that's two underscores!)
// just run it in this file from terminal:
// node webpack.config.js
// google node path ...
// to get path.join to join paths ...
// run this in this file: console.log(path.join(__dirname, "public"));
// from terminal its node webpack.config.js



// webpack documentation is a great resource
// webbpack.js.org
// see documentation
