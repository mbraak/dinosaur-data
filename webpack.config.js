var path = require('path');

module.exports = {
    entry: {
        app: ["./src/index.js"]
    },
    output: {
        filename: "index.js",
        library: "example_data",
        libraryTarget: "commonjs"
    }
};
