(function () {
	'use strict';

	var app = angular.module('app.contact');

	//App run time configurations
	app.run(
		['$rootScope', '$state', '$stateParams',
			function ($rootScope, $state, $stateParams) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
			}
		]
	)

		//App configurations for state and url proividers
		.config(
			['$stateProvider',
				function ($stateProvider) {
					//redirect url when it matches
					//chat state which redirect to chat page
					$stateProvider
						.state('contact', {
							url: '/contact',
							templateUrl: '../app/scripts/contact/views/contact.html',
							controller: 'ContactController',
							controllerAs: 'contactCtrl'
						});
				}
			]
		);
})();
