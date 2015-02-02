var gruntReact = require('grunt-react');
module.exports = function(grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),



    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'public/build/app.css': 'public/src/css/**/*.scss'
            }
        }
    },

    browserify: {
        options: {
            transform: [ gruntReact.browserify ]
        },
        client: {
            src: ['components/**/*.jsx', 'public/src/js/main.js'],
            dest: 'public/build/app.min.js'
        }
    }
});

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', [
        'sass',
        'browserify'
    ]);
};