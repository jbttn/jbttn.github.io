module.exports = function(grunt) {

grunt.initConfig({
  copy: {
    jquery: {
      files: [
        {expand: true, cwd: 'bower_components/jquery/dist/', src: 'jquery.min.js', dest: 'assets/js/'}
      ]
    }
  },
  sass: {
    dist: {
      options: {
        style: 'compressed'
      },
      files: [
        {expand: true, cwd: '_sass/', src: 'application.scss', dest: 'assets/css/', ext: '.css'}
      ]
    }
  },
  exec: {
    build: {
      cmd: 'jekyll build'
    },
    serve: {
      cmd: 'jekyll serve --watch --host 0.0.0.0'
    },
    serve_resume: {
      cwd: 'resume',
      cmd: 'resume serve -s -p 4001'
    },
    build_resume: {
      cwd: 'resume',
      cmd: 'node export.js'
    },
    update_npm: {
      cmd: 'npm install'
    },
    update_bower: {
      cmd: 'bower install'
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-exec');
grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('default', [ 'copy', 'sass', 'exec:build_resume', 'exec:build' ]);
grunt.registerTask('setup', ['exec:update_npm', 'exec:update_bower']);
};
