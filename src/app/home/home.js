angular.module('app.home', [])

.config(function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl'
    })
})

.controller('HomeCtrl', function($scope) {
    $scope.customers = [
        {name: 'Dave Jones', city: 'Phoenix'},
        {name: 'Jamie Riley', city: 'Atlanta'},
        {name: 'Heedy Wahlin', city: 'Chandler'},
        {name: 'Bob Chafer', city: 'Meridian'}
    ];

    $scope.addCustomer = function () {
        $scope.customers.push({name: $scope.newCustomer.name, city: $scope.newCustomer.city});
    }
});