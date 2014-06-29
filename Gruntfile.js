module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            main: {
                src: [
                    'js/lib/jquery.js',
                    'js/backtotop.js',
                    'js/main.js'
                ],
                dest: 'js/grunt/scripts.js'
            }
        },
        uglify: {
            main: {
                files: {
                    'js/grunt/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        },
        watch: {
            concat: {
                files: '<%= concat.main.src %>',
                tasks: 'concat'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'uglify']);
};
