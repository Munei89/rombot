module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    appConfig: {
      timestamp: Date.now(),
      debug: true,
      cssCompileFormat: 'expanded'
    },

    clean: {
      store: ['dist'],
      temp: ['temp'],
      img: ['dist/assets/img/'],
      js: ['dist/assets/js/**/*'],
      fonts: ['dist/assets/fonts/']
    },
    copy: {
      js: {
        files: [
          {expand: true, cwd: 'src/scripts/', src: ['**/*'], dest: 'dist/assets/js/'}
        ]
      },
      fonts: {
        files: [
          {expand: true, cwd: 'src/fonts/', src: ['**/*'], dest: 'dist/assets/fonts/'}
        ]
      },
      img: {
        files: [
          {expand: true, cwd: 'src/img/', src: ['**/*'], dest: 'dist/assets/img/'}
        ]
      }
    },

    sass: {
      options: {
        outputStyle: '<%= appConfig.cssCompileFormat %>',
        sourceMap: '<%= appConfig.debug %>'
      },
      store: {
        files: {
          'dist/assets/css/dot360.css': 'src/styles/ui-kit360.scss'
        }
      }
    },

    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        files: {
          'dist/assets/js/jquery.dot360.min.js': [
            //libs & plugins
            "src/scripts/lib/jquery.min.js",
            "src/scripts/lib/bootstrap.min.js",
            "src/scripts/lib/material.min.js",
            "src/scripts/lib/moment.min.js",
            "src/scripts/lib/bootstrap-datetimepicker.js",
            "src/scripts/lib/bootstrap-selectpicker.js",
            "src/scripts/lib/daterangepicker.min.js",
            "src/scripts/lib/nouislider.min.js",
            "src/scripts/lib/bootstrap-tagsinput.js",
            "src/scripts/lib/jasny-bootstrap.min.js",
            "src/scripts/lib/jquery.flexisel.js",
            "src/scripts/lib/slick.min.js",
            "src/scripts/lib/jquery-swipe.min.js",
            "src/scripts/lib/jquery.smoothState.js",
            "src/scripts/lib/360-animate.js",
            "src/scripts/lib/Gmaps-places-api.js",
            "src/scripts/lib/loading-bar.js",
            "src/scripts/lib/apexchart.js",
            "src/scripts/lib/wNumb.js",
            "src/scripts/lib/print.min.js",
            "src/scripts/lib/peekabar.js",
            "src/scripts/lib/webcam.js",
            // "src/scripts/lib/jquery.mobile.custom.js",

            // dot360 modules 
            "src/scripts/modules/dot360-main.js",
            // "src/scripts/modules/service-workers.js",
            "src/scripts/modules/page-transitions.js",
            // initiate relevant scripts 
            "src/scripts/jquery.dot360.js"
          ]
        }
      }
    },

    watch: {
      scss: {
        files: ['src/styles/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },
      js: {
        files: ['src/scripts/**/*'],
        tasks: ['clean:js', 'copy:js', 'uglify', 'clean:temp'],
        options: {
          spawn: false
        }
      },
      img: {
        files: ['src/img/**/*'],
        tasks: ['clean:img', 'copy:img'],
        options: {
          spawn: false
        }
      },
      fonts: {
        files: ['src/fonts/**/*'],
        tasks: ['clean:fonts', 'copy:fonts'],
        options: {
          spawn: false
        }
      },
      svg: {
        files: ['src/img/icons/*'],
        tasks: ['grunticon'],
        options: {
          spawn: false
        }
      }
    },
    browserSync: {
        bsFiles: {
            src : ['src/styles/*.scss','src/styles/**/**/*.scss','src/scripts/*.js', '*.html']
        },
        options: {
            server: {
                baseDir: "./"
            },
            watchTask: true,
            port: 8080
        }
      },
    grunticon: {
        mySvgs: {
          files: [{
            expand: true,
            cwd: 'src/img/icons',
            src: ['*.svg', '*.png'],
            dest: "src/img/icons"
          }],
          options: {
            expand: true,
            enhanceSVG: true,
            dynamicColorOnly: true,
            datasvgcss: '../../styles/svg-icons/_svg-icons.data.scss',
            cssprefix: '.icon--',
            colors: {
              white: "#FFF",
              green: "#8cc63f",
              red: "#ed1c24",
              yellow: "#f4d03f",
              warning: "#e2c50a",
              limegreen: '#C1CD23',
              anthracite: '#111',
              lightgrey: '#DDD'
            }
          }
        }
      },
      // prettify: {
      //   options: {
      //     config: '.prettifyrc'
      //   },
      //   all: {
      //     expand: true,
      //     cwd: 'test/actual/ugly/',
      //     ext: '.html',
      //     src: ['*.html'],
      //     dest: 'test/actual/pretty/'
      //   }
      // }
    });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'copy', 'sass', 'uglify', 'clean:temp','browserSync','grunticon:mySvgs','watch']);

  grunt.registerTask('production', function() {
    grunt.config.set('appConfig.debug', false);
    grunt.config.set('appConfig.cssCompileFormat', 'compressed');
    grunt.task.run('default');
  });

};
