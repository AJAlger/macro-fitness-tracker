
var app = angular.module('NutritionTracker', ['ngMaterial', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    // STATES
    $stateProvider

        .state('DataAdd', {
            url: "/add",
            templateUrl: "views/_dataAdd.html",
            controller: "dataAdd"
        })
        .state('DataGraphs', {
            url: "/graphs",
            templateUrl: "views/_dataGraphs",
            controller: "dataGraphs"
        });

});

app.controller('navbar', ['$scope', function($scope) {

  $scope.data = {
      selectedIndex: 0,
      firstLabel: "Item One",
      secondLabel: "Item Two",
      thirdLabel: "Item Three"
  };

    $scope.next = function() {
        $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
    };

    $scope.previous = function() {
        $scope.data.selectedIndex = Math.max($scope.data.selectedIndex -1, 0);
    };

}]);

app.controller('dataAdd', function($scope) {

});

app.controller('dataGraphs', ['$scope', function($scope) {

}]);

