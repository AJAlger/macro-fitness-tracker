
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

app.controller("menuBar", ["$scope", "$mdSidenav", function($scope, $mdSidenav) {

    $scope.items = [
        {label: "Introduction", location: "index"},
        {label: "Macronutrients", location: "data"},
        {label: "Summary", location: "summary"}
    ];

    $scope.openMenu = function() {
        $mdSidenav("left").toggle();
    };

}]);

app.controller("dataAdd", ['$scope', function($scope) {

    $scope.date = new Date();

    $scope.macros = [
        {type: 'Protein', amount: null, multiplier: 4},
        {type: 'Carbohydrate', amount: null, multiplier: 4},
        {type: 'Fat', amount: null, multiplier: 9}
    ];

    $scope.total = function() {
        var total = 0;
        for(var i = 0, length = $scope.macros.length; i < length; i++) {
            total = total + $scope.macros[i].amount * $scope.macros[i].multiplier;
        }
        return total;
    };



}]);

app.controller("dataGraphs", ["$scope", function($scope) {

}]);

app.service("macroCalculation", ['$scope', function($scope) {




}]);

