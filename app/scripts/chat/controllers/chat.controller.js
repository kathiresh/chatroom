(function () {
	'use strict';

	angular
		.module('app.chat')
		.controller('ChatController', ChatController);

	/**
	 * @ngdoc Injector
	 * @name Chatcontroller
	 * @module app.chat
	 * @description
	 * All the dependency injections for chat module
	 * @author Ideas2IT Technologies
	 */
	ChatController.$inject = [];

	/**
	 * @ngdoc ChatController
	 * @name ChatController
	 * @module app.main
	 * @requires
	 * @description
	 * Chat controller contains all the models related to chat module
	 * @author Ideas2IT Technologies
	 */
	function ChatController() {
		var vm = this;

		vm.chatRooms = [{
			label: 'All Rooms',
			id: 'allRooms'
		},
		{
			label: 'Amazon',
			id: 'amazon'
		},
		{
			label: 'Flipkart',
			id: 'flipkart'
		}
		];
		vm.selectedRoom = 'allRooms';
	}



})();
