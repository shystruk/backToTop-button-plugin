module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            main: {
                src: [
                    'js/backtotop.js'
                ],
                dest: 'js/grunt/backtotop.js'
            }
        },
        uglify: {
            main: {
                files: {
                    'js/grunt/backtotop.min.js': '<%= concat.main.dest %>'
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
