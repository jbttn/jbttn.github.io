module.exports = function(grunt) {

grunt.initConfig({
  copy: {
    jquery: {
      files: [
        {expand: true, cwd: 'bower_components/jquery/dist/', src: 'jquery.min.js', dest: 'assets/js/'}
      ]
    }
  },
  exec: {
    build: {
      cmd: 'jekyll build'
    },
    serve: {
      cmd: 'jekyll serve --watch'
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

grunt.registerTask('default', [ 'copy', 'exec:build_resume', 'exec:build' ]);
grunt.registerTask('setup', ['exec:update_npm', 'exec:update_bower']);
};
