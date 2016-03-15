module.exports = function(grunt) {
  // Javelin project configuration
  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	uglify: {
  		build: {
                    src: ['src/js/*.js', 'src/js/**/*.js'],
  			dest: 'public/js/custom/script.min.js',

  		},
  		dev : { 
  			options: {
  				beautify: true,
  				mangle: false,
  				compress: false,
  				preserveComments: 'all'
  			},
  			  src: ['src/js/*.js', 'src/js/**/*.js'],
                      dest: 'public/js/custom/script.min.js',
  		}	
  	},
  	less: {
  		dev: {
  			options: {
  				compress: false,
  				yuicompress: false,
  				optimization: 2
  			},
  			files: {
			          "public/css/main.css": "src/less/*.less" // destination file and source file
			        }
			      },
			      build: {
			      	options: {
			      		compress: true,
			      		yuicompress: true,
			      		optimization: 2
			      	},
			      	files: {
			          "public/css/main.css": "src/less/*.less" // destination file and source file
			        }
			      }
			    },
			    watch: {
			    	js : {
			    		files: ['src/js/*.js', 'src/js/**/*.js'],
			    		tasks: ['uglify:dev']
			    	},
			    	css : {
			    		files: ['src/less/**/*.less'],
			    		tasks: ['less:dev']
			    	}
			    }
			  });

  // Load the plugins that provides  "uglify", "watch" & "less" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // In terminal just type "grunt" to run Default task(s) 
  grunt.registerTask('default', ['uglify:dev','less:dev']);

    // In terminal just type "grunt build" to run Build task(s) 
  grunt.registerTask('build', ['uglify:build','less:build']);
};