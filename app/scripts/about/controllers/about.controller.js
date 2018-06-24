( function() {
	'use strict';

	angular
		.module( 'app.about' )
		.controller( 'AboutController', AboutController );

	/**
	 * @ngdoc Injector
	 * @name Aboutcontroller
	 * @module app.chat
	 * @description
	 * All the dependency injections for chat module
	 * @author Ideas2IT Technologies
	 */
	AboutController.$inject = [];

	/**
	 * @ngdoc AboutController
	 * @name AboutController
	 * @module app.main
	 * @requires
	 * @description
	 * Chat controller contains all the models related to chat module
	 * @author Ideas2IT Technologies
	 */
	function AboutController() {

	}



} )();
