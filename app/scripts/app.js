
var app = angular.module('NutritionTracker', ['ui-router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    // STATES
    $stateProvider

        .state('DataAdd', {
            url: "/",
            templateUrl: "views/_dataAdd.html",
            controller: "dataAdd"
        })
        .state('DataGraphs', {
            url: "/graphs",
            templateUrl: "views/_dataGraphs",
            controller: "dataGraphs"
        });


});

app.controller('dataAdd', ['$scope', function($scope) {

}]);

app.controller('dataGraphs', ['$scope', function($scope) {

}]);

