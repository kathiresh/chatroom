( function() {
	'use strict';


	angular
		.module( 'app.about' )
		.service( 'AboutService', AboutService );

	/**
	 * @ngdoc Injector
	 * @name AboutService
	 * @description
	 * CHat module servivce injection
	 * @module app.AboutService
	 * @author Ideas2IT Technologies
	 */
	AboutService.$inject = [];


	/**
	 * @ngdoc Service
	 * @name AboutService
	 * @description Chat service http request and response handler
	 * @module app.AboutService
	 * @author Ideas2IT Technologies
	 */
	function AboutService() {
		return {

		};
	}


} )();
