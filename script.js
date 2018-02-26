var app = angular.module('myApp',['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/home.html',
        controller: 'IndexCtrl'
      }).when('/second', {
        templateUrl: 'partials/second.html',
        controller: 'SecondCtrl'
      });
});


app.controller('IndexCtrl',['$scope', function(){
    console.log("Index");
}]);

app.controller('SecondCtrl',['$scope', function(){
    console.log("Second");
}]);