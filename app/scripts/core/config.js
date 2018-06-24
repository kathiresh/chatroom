( function() {
	'use strict';

	var app = angular.module( 'app' );

	app
		.config( httpConfig );


	// toastrConfig.$inject = [ 'toastr' ];
	// /* @ngInject */
	// function toastrConfig( toastr ) {
	// 	toastr.options.newestOnTop = true;
	// 	toastr.options.progressBar = true;
	// 	toastr.options.showMethod = 'show';
	// 	toastr.options.hideMethod = 'hide';
	// 	toastr.options.preventDuplicates = true;
	// 	toastr.options.positionClass = 'toast-top-right';
	// }

	httpConfig.$inject = [
		'$httpProvider', '$sceDelegateProvider', '$locationProvider', '$qProvider'
	];

	function httpConfig( $httpProvider, $sceDelegateProvider, $locationProvider, $qProvider ) {

		$httpProvider.defaults.useXDomain = true;
		//$httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
		delete $httpProvider.defaults.headers.common[ 'X-Requested-With' ];
		$sceDelegateProvider.resourceUrlWhitelist( [ '**' ] );

		var interceptor = [ '$q', '$rootScope', function( $q, $rootScope ) {

			return {
				//On Request
				'request': function( request ) {
					return request || $q.when( request );
				},
				//On Request Error
				requestError: function( rejection ) {
					$rootScope.isLoading = false;
					return $q.reject( rejection );
				},
				//On Response
				response: function( response ) {
					$rootScope.isLoading = false;
					return response;
				},
				//On Response Error
				responseError: function( rejection ) {
					$rootScope.isLoading = false;
					return $q.reject( rejection );
				}
			};
		} ];

		$httpProvider.interceptors.push( interceptor );
		$qProvider.errorOnUnhandledRejections( false );
		$locationProvider.hashPrefix( '' );
	}
} )();
