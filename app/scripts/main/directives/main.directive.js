( function() {
	'use strict';

	angular
		.module( 'app' )
		.directive( 'headerDirective', headerDirective );

	headerDirective.$inject = [];

	/**
	 * @ngdoc Directive
	 * @namespace headerDirective
	 * @module app
	 * @restrict E
	 * @desc This directive creates header
	 * @author Ideas2IT Technologies
	 */
	function headerDirective() {
		var directive = {
			restrict: 'E',
			templateUrl: '../app/scripts/main/views/header.html'
		};
		return directive;
	}

	angular
		.module( 'app' )
		.directive( 'footerDirective', footerDirective );

	footerDirective.$inject = [];

	/**
	 * @ngdoc Directive
	 * @namespace footerDirective
	 * @module app
	 * @restrict E
	 * @desc This directive creates footer
	 * @author Ideas2IT Technologies
	 */
	function footerDirective() {
		var directive = {
			restrict: 'E',
			templateUrl: '../app/scripts/main/views/footer.html'
		};
		return directive;
	}
} )();
