"use strict";

var app = angular.module('NutritionTracker', ['ngMaterial', 'ui.router', 'ngResource']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    // STATES
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'views/_landing.html'
        })
        .state('data', {
            url: '/macronutrients',
            templateUrl: 'views/_dataAdd.html',
            controller: 'dataAdd'
        })
        .state('summary', {
            url: '/summary',
            templateUrl: 'views/_dataGraphs.html'
        });
}]);

app.controller('menuBar', ['$scope', '$mdSidenav', 'MenuItems', function($scope, $mdSidenav, MenuItems) {

    $scope.items = MenuItems.items();

    $scope.openMenu = function() {
        $mdSidenav('left').toggle();
    };

}]);

app.controller('dataAdd', ['$scope', 'MacroCalculation', function($scope, MacroCalculation) {

    $scope.macros = MacroCalculation.macros();
    $scope.totals = MacroCalculation.totals();

}]);

app.controller('dataShow', ['$scope', 'NutritionData', function($scope, NutritionData) {

    NutritionData.success(function(data){$scope.results = data;})
        .error(function(data, status){console.log(data, status); $scope.results = [];});



}]);

app.service('MenuItems', [function() {

    var menuItems = [
        {'label': 'Introduction', 'location': 'index'},
        {'label': 'Macronutrients', 'location': 'data'},
        {'label': 'Summary', 'location': 'summary'}
    ];

    var getMenuItems = function() {
      return menuItems;
    };

    return {
        items: getMenuItems
    }

}]);

app.factory('MacroCalculation', function() {

    var macros = [
        {
            'type': 'Protein',
            'amount': null,
            'multiplier': 4,
            'tip': 'Calories per gram of protein',
            'total': function() {return this.amount * this.multiplier;}
        },
        {
            'type': 'Carbohydrate',
            'amount': null,
            'multiplier': 4,
            'tip': 'Calories per gram of carbohydrate',
            'total': function() {return this.amount * this.multiplier;}
        },
        {
            'type': 'Fat',
            'amount': null,
            'multiplier': 9,
            'tip': 'Calories per gram of fat',
            'total': function() {return this.amount * this.multiplier;}
        }];


    var getMacros = function() {
        return macros;
    };

    var totals = function() {
        for (var i = 0, values = 0, length = macros.length; i < length; i += 1) {
            values += macros[i].amount * macros[i].multiplier;
        }
           return values;
    };

    var getTotals = function() {
      return totals;
    };

    return {
        macros: getMacros,
        totals: getTotals
    }

});

app.factory('NutritionData', ['$http', function($http) {

    return  $http.get('/data/nutrition');

    // Write all of the HTTP POST, GET and individual IDs here.

}]);


app.controller('dataGraphs', ['$scope', function($scope) {


}]);


app.directive('MacroGraphs', function() {



});

app.filter('percentage', ['$filter', function ($filter) {
    return function (input, decimals) {
        return $filter('number')(input * 100, decimals) + '%';
    };
}]);

