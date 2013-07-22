angular.module('app',[
	'templates.app',
	'app.home', 
	'app.about'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/home' });
}])

.controller( 'AppCtrl', ['$scope', function ($scope) {

}]);