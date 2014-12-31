
var app = angular.module('NutritionTracker', ['ngMaterial', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    // STATES
    $stateProvider
        .state("index", {
            url: "/",
            templateUrl: "views/_landing.html"
        })
        .state("data", {
            url: "/macronutrients",
            templateUrl: "views/_dataAdd.html",
            controller: "dataAdd"
        })
        .state("summary", {
            url: "/summary",
            templateUrl: "views/_dataGraphs.html"
        });
}]);

app.controller('menuBar', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {

    $scope.items = [
        {label: "Introduction", location: "index"},
        {label: "Macronutrients", location: "data"},
        {label: "Summary", location: "summary"}
    ];

    $scope.openMenu = function() {
        $mdSidenav('left').toggle();
    };

}]);

app.controller("dataAdd", ['$scope', function($scope) {

    $scope.macros = [
        {protein: null},
        {carbs: null},
        {fat: null}
    ];

    $scope.


}]);

app.controller("dataGraphs", ["$scope", function($scope) {

}]);
