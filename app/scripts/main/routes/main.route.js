( function() {
	'use strict';

	var app = angular.module( 'app.main' );

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
		[ '$stateProvider', '$urlRouterProvider',
			function( $stateProvider, $urlRouterProvider ) {
				//redirect url when it matches
				$urlRouterProvider
					.when( '/', 'main' )
					.otherwise( '/main' );
				//main state which redirect to main page
				$stateProvider	
					.state( 'main', {
						url: '/main',
						templateUrl: '../app/scripts/main/views/main.html',
						controller: 'MainController',
						controllerAs: 'mainCtrl'
					} );
			}
		]
	);
} )();
