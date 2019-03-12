module.exports=function (grunt) {
  grunt.initConfig({
    imagemin: {
     dynamic: {
       files: {
          expand: true,
          cwd: './images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/'
                                                         
       }
               
     }
    }
  });

 grunt.loadNpmTasks('grunt-contrib-imagemin');
 grunt.registerTask('default', ['imagemin']); 

};
