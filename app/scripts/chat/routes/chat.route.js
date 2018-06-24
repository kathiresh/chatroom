( function() {
	'use strict';

	var app = angular.module( 'app.chat' );

	//App run time configurations
	app.run(
		[ '$rootScope', '$state', '$stateParams',
			function( $rootScope, $state, $stateParams ) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
			}
		]
	)

	//App configurations for state and url proividers
	.config(
		[ '$stateProvider',
			function( $stateProvider) {
				//redirect url when it matches
				//chat state which redirect to chat page
				$stateProvider
					.state( 'chat', {
						url: '/chat',
						templateUrl: '../app/scripts/chat/views/chat.html',
						controller: 'ChatController',
						controllerAs: 'chatCtrl'
					} );
			}
		]
	);
} )();
