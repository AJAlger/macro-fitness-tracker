{"changed":true,"filter":false,"title":"gulpfile.js","tooltip":"/gulpfile.js","value":"var gulp = require('gulp'),\n    sass = require('gulp-ruby-sass'),\n    uglify = require('gulp-uglify'),\n    livereload = require('gulp-livereload'),\n    plumber = require('gulp-plumber'),\n    rename = require('gulp-rename'),\n    neat = require('node-neat').includePaths,\n    sourcemaps = require('gulp-sourcemaps');\n\nvar myApp = require('./server.js');\n// No need to load Bourbon here since Neat is included.\n// I received errors when trying to load Bourbon by itself.\n// Since Neat depends on Bourbon, loading Neat works just as well.\n\n// I chose to write all the paths as variables to use throughout.\nvar paths = {\n    sass: 'app/stylesheets/scss/', // Stylesheets folder for SASS\n    css: 'app/stylesheets/css/', // Stylesheets folder for CSS\n    script: 'app/scripts/' // Scripts folder for JS files\n};\n\n// Default Loader for Gulp with all tasks loaded\ngulp.task('default', ['express', 'styles', 'scripts', 'watch'], function() {});\n\n// Gulp Task to Run Express Server\ngulp.task('express', function() {\n        myApp.listen(8080);\n});\n\n// Gulp Task to SASS - Bourbon and Neat are Working\n// Plumber Checks for Errors\ngulp.task('styles', function() {\n    return gulp.src(paths.sass + '*.scss') // Path to Stylesheets folder and files\n        .pipe(plumber()) // Checks for any errors and notifies if there are\n        .pipe(sass({loadPath: ['styles'].concat(neat)})) // Loading Bourbon and Neat\n        // loadPath when using gulp-ruby-sass must be used\n        // instead of includePaths when using gulp-sass\n        .pipe(gulp.dest(paths.css)) // CSS destination where it is expanded\n        .pipe(livereload()); // Reloading Gulp each time a change has been made\n});\n\n// Gulp Task to Check and Uglify Scripts\n// Plumber Checks for Errors\ngulp.task('scripts', function() {\n    return gulp.src(paths.script + '*.js') // Path to Script folder\n        .pipe(plumber()) // Checks for any errors and notifies if there are\n        .pipe(sourcemaps.init())\n        .pipe(uglify())// Makes all scripts into a single line for minimizing file size\n        .pipe(sourcemaps.write())\n        .pipe(gulp.dest(paths.script + '/minjs')) // Puts files into and creates new Minjs folder\n        .pipe(livereload()); // Reloading Gulp each time a change has been made\n});\n\n// Watching Folders and Files for Changes\ngulp.task('watch', function() {\n    livereload.listen(); // Livereload is loaded\n    gulp.watch(paths.script + '*.js', ['scripts']); // Watching Scripts folder\n    gulp.watch(paths.sass + '*.scss', ['styles']); // Watching Stylesheets folder\n});\n\n\n","undoManager":{"mark":94,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":28,"column":4},"end":{"row":28,"column":5},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":5},"end":{"row":28,"column":6},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":6},"end":{"row":28,"column":7},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":9},"end":{"row":28,"column":10},"action":"insert","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":10},"end":{"row":28,"column":11},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":11},"end":{"row":28,"column":12},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":12},"end":{"row":28,"column":13},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":13},"end":{"row":28,"column":14},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":13},"end":{"row":28,"column":14},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":13},"end":{"row":28,"column":14},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":14},"end":{"row":28,"column":15},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":18},"end":{"row":28,"column":19},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":19},"end":{"row":28,"column":20},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":20},"end":{"row":28,"column":21},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":21},"end":{"row":28,"column":22},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":22},"end":{"row":28,"column":23},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":23},"end":{"row":28,"column":24},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":24},"end":{"row":28,"column":25},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":25},"end":{"row":28,"column":27},"action":"insert","lines":["IP"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":27},"end":{"row":28,"column":28},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":28},"end":{"row":29,"column":0},"action":"insert","lines":["",""]},{"start":{"row":29,"column":0},"end":{"row":29,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":4},"end":{"row":29,"column":5},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":5},"end":{"row":29,"column":6},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":6},"end":{"row":29,"column":7},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":7},"end":{"row":29,"column":8},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":8},"end":{"row":29,"column":9},"action":"insert","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":9},"end":{"row":29,"column":10},"action":"insert","lines":["O"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":10},"end":{"row":29,"column":11},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":11},"end":{"row":29,"column":12},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":12},"end":{"row":29,"column":13},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":13},"end":{"row":29,"column":14},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":14},"end":{"row":29,"column":15},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":15},"end":{"row":29,"column":16},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":16},"end":{"row":29,"column":17},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":17},"end":{"row":29,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":18},"end":{"row":29,"column":19},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":19},"end":{"row":29,"column":20},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":20},"end":{"row":29,"column":21},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":21},"end":{"row":29,"column":22},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":22},"end":{"row":29,"column":23},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":23},"end":{"row":29,"column":24},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":24},"end":{"row":29,"column":25},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":25},"end":{"row":29,"column":26},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":26},"end":{"row":29,"column":27},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":27},"end":{"row":29,"column":28},"action":"insert","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":28},"end":{"row":29,"column":29},"action":"insert","lines":["O"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":29},"end":{"row":29,"column":30},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":30},"end":{"row":29,"column":31},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":31},"end":{"row":29,"column":32},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":17},"end":{"row":30,"column":49},"action":"remove","lines":["process.env.IP, process.env.PORT"]},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"insert","lines":["O"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"insert","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":4},"end":{"row":29,"column":32},"action":"remove","lines":["var IP = process.env.IP;","    var PORT = process.env.PORT;"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":4},"end":{"row":29,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":21},"end":{"row":28,"column":28},"action":"remove","lines":["PORT, I"]},{"start":{"row":28,"column":21},"end":{"row":28,"column":22},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":22},"end":{"row":28,"column":23},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":23},"end":{"row":28,"column":24},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":24},"end":{"row":28,"column":25},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":21},"end":{"row":28,"column":25},"action":"remove","lines":["proc"]},{"start":{"row":28,"column":21},"end":{"row":28,"column":28},"action":"insert","lines":["process"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":28},"end":{"row":28,"column":29},"action":"remove","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":28},"end":{"row":28,"column":29},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":29},"end":{"row":28,"column":30},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":29},"end":{"row":28,"column":30},"action":"remove","lines":["e"]},{"start":{"row":28,"column":29},"end":{"row":28,"column":32},"action":"insert","lines":["env"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":32},"end":{"row":28,"column":33},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":33},"end":{"row":28,"column":34},"action":"insert","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":34},"end":{"row":28,"column":35},"action":"insert","lines":["O"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":35},"end":{"row":28,"column":36},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":36},"end":{"row":28,"column":37},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":37},"end":{"row":28,"column":38},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":38},"end":{"row":28,"column":39},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":39},"end":{"row":28,"column":40},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":40},"end":{"row":28,"column":41},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":41},"end":{"row":28,"column":42},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":42},"end":{"row":28,"column":43},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":43},"end":{"row":28,"column":44},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":39},"end":{"row":28,"column":44},"action":"remove","lines":["proce"]},{"start":{"row":28,"column":39},"end":{"row":28,"column":46},"action":"insert","lines":["process"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":46},"end":{"row":28,"column":47},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":47},"end":{"row":28,"column":48},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":48},"end":{"row":28,"column":49},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":47},"end":{"row":28,"column":49},"action":"remove","lines":["en"]},{"start":{"row":28,"column":47},"end":{"row":28,"column":50},"action":"insert","lines":["env"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":50},"end":{"row":28,"column":51},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":51},"end":{"row":28,"column":52},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":52},"end":{"row":28,"column":53},"action":"insert","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":65},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":21},"end":{"row":26,"column":53},"action":"remove","lines":["process.env.PORT, process.env.IP"]},{"start":{"row":26,"column":21},"end":{"row":26,"column":22},"action":"insert","lines":["8"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":23},"end":{"row":26,"column":24},"action":"insert","lines":["8"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":24},"end":{"row":26,"column":25},"action":"insert","lines":["0"]}]}]]},"ace":{"folds":[],"scrolltop":441,"scrollleft":0,"selection":{"start":{"row":34,"column":60},"end":{"row":34,"column":60},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":30,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1421135517241}