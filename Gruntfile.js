/*module.exports=function(){
  grunt.initConfig(funnction(){
    less: {
      development: {
        files: {
          'css/': 'less'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default',['less:compile']);
}
*/
/*
moule.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: {
          'css/layout.css': 'less/layout.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  
  grunt.registerTask('default', ['less']);

};
*/


module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: {
          'css/layout.css': 'less/layout.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less']);

};


