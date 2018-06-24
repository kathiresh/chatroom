( function() {
	'use strict';


	angular
		.module( 'app.contact' )
		.service( 'ContactService', ContactService );

	/**
	 * @ngdoc Injector
	 * @name ContactService
	 * @description
	 * CHat module servivce injection
	 * @module app.ContactService
	 * @author Ideas2IT Technologies
	 */
	ContactService.$inject = [];


	/**
	 * @ngdoc Service
	 * @name ContactService
	 * @description Chat service http request and response handler
	 * @module app.ContactService
	 * @author Ideas2IT Technologies
	 */
	function ContactService() {
		return {

		};
	}


} )();
