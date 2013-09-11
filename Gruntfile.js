module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			add_banner: {
				options: {
					banner: '/* <%= pkg.name %> - v.<%= pkg.version %> - CSS  */\n',
					report: 'gzip'
				},
				files: {
					'./public/stylesheets/<%= pkg.name %>.<%= pkg.version %>.min.css': ['./public/stylesheets/style.css', './public/bower_components/normalize-css/normalize.css']
				}
			}
		},

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'./views/<%= pkg.name %>.ejs': './views/index.ejs'
				}
			}
		},

		imagemin: {
			static: {
				options: {
					optimizationLevel: 3
				},
				files: {
					'./public/images/logo_criptonlabs.min.png': './public/images/logo_criptonlabs.png',
					'./public/images/logo_criptonlabs2.min.png': './public/images/logo_criptonlabs2.png',
					'./public/images/notebook_icon.min.png': './public/images/notebook_icon.png',
					'./public/images/tablet_icon.min.png': './public/images/tablet_icon.png',
					'./public/images/dialog_icon.min.png': './public/images/dialog_icon.png',
					'./public/images/favicon.min.ico': './public/images/favicon.ico'
				}
			}
		}

	});

	// Load plugin(s)
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	// Default task(s)
	grunt.registerTask('default', ['cssmin', 'htmlmin', 'imagemin']);

};