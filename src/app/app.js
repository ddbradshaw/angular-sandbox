angular.module('app',['templates.app','app.home', 'app.about'])

.config(function($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/home' });
})

.controller( 'AppCtrl', ['$scope', function AppCtrl ( $scope ) {

}]);