/*================================================================
App Module
==================================================================*/
(function () {
	'use strict';

	angular.element(document).ready(function () {
		angular.bootstrap(document, ['app']);
	});

	/**
	 * @ngapp
	 * @name app
	 * @description
	 * App module starts here
	 * @author Ideas2it Technologies
	 */
	angular.module('app', [
		'ui.router',
		'ngSanitize',
		'app.main',
		'app.chat',
		'app.contact',
		'app.about'
	]);

})();
