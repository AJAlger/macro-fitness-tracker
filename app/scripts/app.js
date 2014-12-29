
var app = angular.module('NutritionTracker', ['ngMaterial', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    $urlRouterProvider.otherwise("/");

    // STATES
    $stateProvider

        .state("home", {
            url: "/",
            templateUrl: "views/_landing.html"
        })
        .state("data", {
            url: "/add",
            templateUrl: "views/_dataAdd.html",
            controller: "dataAdd"
        })
        .state("graphs", {
            url: "/graphs",
            templateUrl: "views/_dataGraphs.html"
        });



}]);

app.controller('navBar', ['$scope', function($scope) {

    $scope.labels =  {
        homeTab: "Home",
        firstTab: "Add Information",
        secondTab: "Charts"
    }

}]);


app.controller("dataAdd", ['$scope', function($scope) {



}]);

app.controller("dataGraphs", ["$scope", function($scope) {

}]);
