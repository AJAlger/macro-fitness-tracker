
var app = angular.module('NutritionTracker', ['ngMaterial', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

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

app.controller('menuBar', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {

    $scope.items = [
        {label: "Home", location: "home"},
        {label: "Add Information", location: "data"},
        {label: "Charts", location: "graphs"}
    ];

    $scope.openMenu = function() {
        $mdSidenav('left').toggle();
    };

}]);


app.controller("dataAdd", ['$scope', function($scope) {



}]);

app.controller("dataGraphs", ["$scope", function($scope) {

}]);
