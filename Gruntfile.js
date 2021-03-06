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
        target: 'dist/list.js',
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
            'dist/js/note.js': 'dist/list.js',
          }
        }
      }	,
      concat: {
        js: {
          src: ['js/note.js', 'js/mune.js'],
          dest: 'dist/list.js'
        }
      }  
    });
  
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('list', ['concat']);
    grunt.registerTask('default', ['htmlhint', 'csslint', 'eslint']);
    grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);
  };