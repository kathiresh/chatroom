'use strict';

var chalk = require( 'chalk' );

/*-----------------------------------------------------------
 GULP: APP CONFIGURATION
 Source, Build folder and other application configuration
-----------------------------------------------------------*/
var config = function() {

	// Source Path
	var src = {
		root: 'app',
		cssPath: 'app/assets/css',
		scssPath: 'app/assets/scss',
		css: [
			'bower_components/toastr/toastr.min.css',
			'plugins/css/*.css',
			'app/assets/css/style.css'
		],
		scss: [
			'app/assets/scss/*.scss'
		],
		js: 'app/scripts',
		images: 'app/assets/images/*.jpg',
		fonts: 'app/assets/fonts',
		bower: './bower_components',
		libs: [
			'plugins/js/jquery.js',
			'bower_components/angular/angular.min.js',
			'bower_components/angular-aria/angular-aria.min.js',
			'bower_components/angular-animate/angular-animate.min.js',
			'bower_components/angular-sanitize/angular-sanitize.min.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/angular-ui-router/release/angular-ui-router.min.js',
			'bower_components/jquery/dist/jquery.min.js',
			'bower_components/toastr/toastr.min.js',
			'plugins/js/bootstrap.min.js',
			'plugins/js/custom.js',
			'plugins/js/modernizr.custom.js',
			'plugins/js/owl.carousel.min.js',
			'plugins/js/smoothscroll.js',
			'plugins/js/toucheffects.js',
			'plugins/js/vegas.min.js',
			'plugins/js/wow.min.js'
		]
	};

	// Build Path
	var build = {
		root: 'build',
		css: 'build/assets/css',
		js: 'build/js',
		images: 'build/assets/images',
		fonts: 'build/assets/fonts',
		filePath: {
			js: [
				'build/js/bower.js',
				'build/js/application.js',
				'build/js/templates.js'
			],
			minJs: [
				'build/js/application.min.js',
			]
		}
	};
	//Server Configuration
	var serverConfiguration = {
		host: 'localhost',
		port: 3001,
		open: true,
		livereload: {
			enable: true,
			port: 35729
		}
	};

	//Default production mode set to false
	var production = false;

	//Bower Configuration
	var bowerConfiguration = {
		paths: {
			bowerDirectory: src.bower,
			bowerrc: '.bowerrc',
			bowerJson: 'bower.json'
		}
	};

	// Minification options for HTML
	var opts = {
		comments: false,
		quotes: true,
		spare: true,
		empty: true,
		cdata: true
	};

	// Chalk config
	var notify = {
		error: chalk.red.bold,
		warning: chalk.black.bold.bgYellow,
		update: chalk.yellow.underline,
		success: chalk.green
	};

	// CSS autoprefix config
	var browserVersion = [ 'last 2 versions' ];

	return {
		source: src,
		build: build,
		serverConfiguration: serverConfiguration,
		production: production,
		bowerConfiguration: bowerConfiguration,
		opts: opts,
		notify: notify,
		browserVersion: browserVersion,
		serverIP: '127.0.0.1'
	};
};

module.exports = config();
