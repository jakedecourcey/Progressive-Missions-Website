module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          "css/skeleton.css": "scss/skeleton.scss"
        }
      }
    },

    uglify: {
      my_target:{
        files:{
          'js/scripts.js' : ['node_modules/jquery/dist/jquery.js', 'js_working/scripts.js']
        }
      }
    },

    watch: {
      options: {
        livereload: false,
      },
      styles: {
        files: ['scss/**/*.scss', 'node_modules/jquery/dist/jquery.js', 'js_working/scripts.js'], // which files to watch
        tasks: ['sass', 'uglify'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass', 'watch']);
};
