module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/**\n' +
                ' * <%= pkg.name %> v<%= pkg.version %>\n' +
                ' * <%= pkg.homepage %>\n' +
                ' *\n' +
                ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
                ' * Released under the <%= pkg.license %> license\n' +
                ' *\n' +
                ' * Date: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' */\n',

    // Task configuration.
    clean: ['dist'],
    eslint:{
      options: {
          configFile: ".eslintrc.json",
          silent: false
      },
      src: ["src/jquery.scroltable.js"]
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['images/**'],
            dest: 'dist/'},
        ],
      },
    },
    cssmin: {
      dist: {
        files: {
          'dist/jquery.scroltable.min.css': 'src/jquery.scroltable.css'
        }
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      my_target: {
        files: {
          'dist/jquery.scroltable.min.js': ['src/jquery.scroltable.js']
        }
      }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("gruntify-eslint");
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', [
    'clean',
    'eslint',
    'copy',
    'cssmin',
    'uglify'
  ]);
};
