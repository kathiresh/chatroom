( function() {
	'use strict';


	angular
		.module( 'app.chat' )
		.service( 'ChatService', ChatService );

	/**
	 * @ngdoc Injector
	 * @name ChatService
	 * @description
	 * CHat module servivce injection
	 * @module app.ChatService
	 * @author Ideas2IT Technologies
	 */
	ChatService.$inject = [];


	/**
	 * @ngdoc Service
	 * @name ChatService
	 * @description Chat service http request and response handler
	 * @module app.ChatService
	 * @author Ideas2IT Technologies
	 */
	function ChatService() {
		return {

		};
	}


} )();
