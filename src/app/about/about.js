//Note:
// If you want to use a minifier, you must pass an array as the second argument where
// injected stuff is referenced as string.

angular.module('app.about', [])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/about', {
        templateUrl: 'about/about.tpl.html',
        controller: 'AboutCtrl'
    })
}])

.controller('AboutCtrl', ['$scope', function($scope) {
    $scope.customers = [
        {name: 'Dave Jones', city: 'Phoenix'},
        {name: 'Jamie Riley', city: 'Atlanta'},
        {name: 'Heedy Wahlin', city: 'Chandler'},
        {name: 'Susan Doe', city: 'Meridian'}
    ];
}]);