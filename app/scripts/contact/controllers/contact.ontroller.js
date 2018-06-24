( function() {
	'use strict';

	angular
		.module( 'app.contact' )
		.controller( 'ContactController', ContactController );

	/**
	 * @ngdoc Injector
	 * @name Contactcontroller
	 * @module app.chat
	 * @description
	 * All the dependency injections for chat module
	 * @author Ideas2IT Technologies
	 */
	ContactController.$inject = [];

	/**
	 * @ngdoc ContactController
	 * @name ContactController
	 * @module app.main
	 * @requires
	 * @description
	 * Chat controller contains all the models related to chat module
	 * @author Ideas2IT Technologies
	 */
	function ContactController() {

	}



} )();
