var gruntReact = require('grunt-react');
module.exports = function(grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
        react: {
            files: ['public/src/**/*.jsx', 'public/src/**/*.scss'],
            tasks: ['default']
        }
    },

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
            src: ['public/src/js/components/**/*.jsx'],
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