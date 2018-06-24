( function() {
	'use strict';


	angular
		.module( 'app.main' )
		.service( 'MainService', MainService );

	/**
	 * @ngdoc Injector
	 * @name MainService
	 * @description
	 * main module servivce injection
	 * @module app.MainService
	 * @author Ideas2IT Technologies
	 */
	MainService.$inject = [];


	/**
	 * @ngdoc Service
	 * @name MainService
	 * @description Main service http request and response handler
	 * @module app.MainService
	 * @author Ideas2IT Technologies
	 */
	function MainService() {
		return {

		};
	}


} )();
