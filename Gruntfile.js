module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Task configuration goes here.

  });

  // Load plugins here.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.initConfig({

    copy: {
      build: {
        cwd: 'app/client/',
        src: [ '**/*.html' ],
        dest: 'app/dist/build',
        expand: true
      },
    },
    uglify: {
      options: {
        mangle: false,
        compress: false
      },
      app: {
        files: {
          'app/dist/build/js/app.js': ['app/client/app/**/*.js', 'app/client/assets/js/**/*.js']
        }
      }
    },

    less: {
      development: {
        files: {
          'app/dist/build/css/app.css': 'app/client/assets/less/main.less'
        }
      }
    },

    watch: {
      styles: {
        files: ['app/client/assets/less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
      html: {
        files: ['app/client/**/*.html'],
        tasks: ['copy'],
        options: {
          nospawn: true
        } 
      },
      js: {
        files: ['app/client/app/**/*.js', 'app/client/assets/js/**/*.js'],
        tasks: ['uglify'],
        options: {
          nospawn: true
        }
      }
    }

  });

  // Register tasks here.
  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('build', ['copy', 'less', 'uglify']);

};