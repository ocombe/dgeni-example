module.exports = function(grunt) {

  grunt.registerTask('dgeni', 'Generate docs via dgeni.', function() {
    var done = this.async();
    require('./docs/dgeni.conf').generate().then(done);
  });

  grunt.registerTask('default', ['dgeni']);

};