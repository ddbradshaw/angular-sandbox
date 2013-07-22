//Note:
// If you want to use a minifier, you must pass an array as the second argument where
// injected stuff is referenced as string.

angular.module('app.home', [])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl'
    })
}])

.controller('HomeCtrl', ['$scope',function($scope) {
    $scope.customers = [
        {name: 'Dave Jones', city: 'Phoenix'},
        {name: 'Jamie Riley', city: 'Atlanta'},
        {name: 'Heedy Wahlin', city: 'Chandler'},
        {name: 'Bob Chafer', city: 'Meridian'}
    ];

    $scope.addCustomer = function () {
        $scope.customers.push({name: $scope.newCustomer.name, city: $scope.newCustomer.city});
    }
}]);