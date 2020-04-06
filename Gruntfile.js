module.exports = function (grunt) {
    grunt.initConfig({
      htmlhint: {
        options: {
          htmlhintrc: '.htmlhintrc'
        },
        src:'./index.html'
      },
      csslint: {
        options: {
          csslintrc: '.csslintrc'
        },
        src:'css/note.css'
      },
      eslint: {
        options: {
          configFile: '.eslintrc.json'
        },
        target: 'js/note.js',
      },
      htmlmin: {
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        files: {
          src: './index.html',
          dest: 'dist/index.html'
        }
      },
      cssmin: {
        'dist/css/note.css': 'css/note.css'
      },
      uglify: {
        release:{
          files: {
            'dist/js/note.js': 'js/note.js',
          }
        }
      }	    
    });
  
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['htmlhint', 'csslint', 'eslint']);
    grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);
  };