module.exports = function(grunt) {

	//Load Task
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-html2js');

	//Setup workflow
	grunt.registerTask("default", ['build', 'karma:unit']);
	grunt.registerTask("build", ['clean:all', 'html2js', 'concat', 'recess:build', 'copy:assets']);
	grunt.registerTask("release", ['clean:all', 'html2js', 'uglify', 'karma:unit', 'concat:index', 
        'recess:min', 'copy:assets', 'clean:templates']);

	//Configure tasks
	grunt.initConfig({
		//Distribution folder name
        distdir: 'build',

        //Header banner added to some output files
        banner: '/* Made by me */\n\n',

		//Read the contents of the package.json file
        pkg:  grunt.file.readJSON("package.json"),

		//Contains source variables
        src: {
			js: ['src/**/*.js', '!src/**/*.spec.js', '<%= distdir %>/templates/**/*.js'],
            unit: ['src/**/*.spec.js'],
      		html: ['src/index.html'],
      		tpl: {
        		app: ['src/app/**/*.tpl.html']
      		},
            less: ['src/less/stylesheet.less']
    	},

        //Clean (delete) files and folders
		clean: {
            all: ['<%= distdir %>/*'],
            templates: ['<%= distdir %>/templates']
        },

        //Copy the source files into the destination location
		copy: {
      		assets: {
        		files: [{ 
                    src : '**',
                    dest: '<%= distdir %>/assets/',
                    expand: true, 
                    cwd:'src/assets'
                }]
            }
    	},

        //Concatenate the source files into a single destination file
		concat: {
			dist:{
        		src:['<%= src.js %>'],
        		dest:'<%= distdir %>/app/app.js'
      		},
			index: {
        		src: ['src/index.html'],
        		dest: '<%= distdir %>/index.html',
        		options: {
          			process: true
        		}
      		},
            angular: {
                src:['vendor/angular/angular.min.js'],
                dest: '<%= distdir %>/app/angular.js'
            },
		},

        //Convert html templates into javascript module for later concatenation
		html2js: {
      		app: {
        		options: {
          			base: 'src/app'
        		},
        		src: ['<%= src.tpl.app %>'],
        		dest: '<%= distdir %>/templates/tpl.js',
        		module: 'templates.app'
      		}
    	},

        //Uglify the javascript code into single file
        //TODO:  workaround inability to use mangle: true due to angular dependency injection
        uglify: {
            dist:{
                options: {
                    banner: '<%= banner %>',
                    mangle: false
                },
                src:['<%= src.js %>'],
                dest:'<%= distdir %>/app/app.js'
            },
            angular: {
                src:['<%= concat.angular.src %>'],
                dest: '<%= distdir %>/app/angular.js'
            },
        },

        //Lint and minify less / css
        recess: {
            build: {
                files: {
                    '<%= distdir %>/css/style.css':
                    ['<%= src.less %>'] 
                },
                options: {
                    compile: true
                }
            },
            min: {
                files: {
                    '<%= distdir %>/css/style.css': ['<%= src.less %>']
                },
                options: {
                    compress: true
                }
            }
        },

        //Execute single set of unit tests or watch for file changes and execute changes
        //with each change
        karma: {
            unit: { 
                configFile: 'karma/karma.conf.js'
            },
            watch: { 
                configFile: 'karma/karma.conf.js',
                singleRun:false, 
                autoWatch: true
            }
        },

    	//Watch for changes on the specified files, execute the tasks when change detected
        watch:{
	      	dev: {
	        	files:['src/**/*.js', '<%= src.tpl.app %>', '<%= src.html %>'],
	        	tasks:['default']
	      	}
	    }

	});

};