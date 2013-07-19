angular.module('app.about', [])

.config(function($routeProvider){
    $routeProvider.when('/about', {
        templateUrl: 'about/about.tpl.html',
        controller: 'AboutCtrl'
    })
})

.controller('AboutCtrl', function($scope) {
    $scope.customers = [
        {name: 'Dave Jones', city: 'Phoenix'},
        {name: 'Jamie Riley', city: 'Atlanta'},
        {name: 'Heedy Wahlin', city: 'Chandler'},
        {name: 'Susan Doe', city: 'Meridian'}
    ];
});