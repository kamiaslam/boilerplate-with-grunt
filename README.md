# boilerplate-with-grunt
HTML5 boilerplate, grunt with less, uglify and watch tasks
```
Folder structure:
-project Name
-|-public (folder)
---|-img (folder)
---|-fonts (folder)
-|-src (folder)
---|-js (folder)
-----|-custom (folder)
-------|-your-custom.js (files)
-----|-vendor (folder)
-------|-jQuery.js (file)
-------|-bootstrap.js (file)
-------|-modernizr.js (file)
---|-less (folder)
-----|-components (folder)
-------|-inside components folder put all the bootstrap less files and mixins folder
-----|-custom (folder)
-------|-scaffolding.less (file)
-----|-base.less (file) in base.less we import all the less files and keep adding all the custom less files for our project
-gruntfile.js
```

1. INSTALLATION
---------------------
* HTML5 Boilerplate 
* Node JS
* Grunt
	* Grunt tasks


2. INSTALL NODE.JS
---------------------
Make sure Node JS is installed in your system. If not, please download Node from https://github.com/creationix/nvm


6. USE THE FOLLOWING CODE EXAMPLE INSIDE GRUNTFILE.JS

```
module.exports = function(grunt) {
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
```

7. GRUNT TASKS
---------------------
In the above code example I am using following 3 grunt tasks
```
	1) Uglify 
	2) Watch  
	3) Less
```	

Use super user command "sudo" if required. Above commands will add 3 tasks in "devDependencies" object inside package.json.

8. DEVELOPMENT TASK
---------------------
Run "grunt" in terminal which is a default Dev task for developers version i.e. unminified JS and CSS  will be created inside 
"Public" folder

9. BUILD TASK
---------------------
Run "grunt build" in terminal for build task i.e. build version, minified JS and CSS will be created inside "Public" folder

