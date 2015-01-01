
var app = angular.module('NutritionTracker', ['ngMaterial', 'ui.router']);

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

app.controller('menuBar', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {

    $scope.items = [
        {label: 'Introduction', location: 'index'},
        {label: 'Macronutrients', location: 'data'},
        {label: 'Summary', location: 'summary'}
    ];

    $scope.openMenu = function() {
        $mdSidenav('left').toggle();
    };

}]);

app.controller('dataAdd', ['$scope', 'MacroCalculation', function($scope, MacroCalculation) {

    $scope.macros = MacroCalculation.macros();
    $scope.totals = MacroCalculation.totals();

}]);

app.controller('dataGraphs', ['$scope', function($scope) {





}]);

app.factory('MacroCalculation', function() {
   var macros = [
        {type: 'Protein', amount: null, multiplier: 4, tip: 'Calories per gram of protein'},
        {type: 'Carbohydrate', amount: null, multiplier: 4, tip: 'Calories per gram of carbohydrate'},
        {type: 'Fat', amount: null, multiplier: 9, tip: 'Calories per gram of fat'}
    ];

    var getMacros = function() {
        return macros;
    };

    var totals = function() {
        var values = 0;
        for(var i = 0, length = macros.length; i < length; i++) {
          values = values + macros[i].amount * macros[i].multiplier;
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

app.directive('MacroGraphs', function() {

    return function(scope, element, attrs) {
        var chartWidth = element.width();
        var chart = d3.select(element[0]).append('svg')
            .attr('class', 'chart')
            .attr('width', chartWidth);

        var drawChart = function(amounts) {
            var allAmounts = _.map(amounts, function(a) {
                return a.amount || 0;
            });
            var x = d3.scale.linear()
                .domain([0.d3.max(allAmounts)])
                .range([0, chartWidth]);

            chart.selectAll('rect').remove();
            chart.attr('height', 10 * allAmounts.length);

            char.selectAll('rect')
                .data(allAmounts)
                .enter()
                .append('rect')
                .attr('y', function(d, i) { return i * 10; })
                .attr('width', x)
                .attr('height', 10);
        };

        $scope.$watch(attrs.miniChart, function(newVal) {
            console.log('registering change on ' + attrs.miniChart);
            drawChart(newVal);
        }, true);

    }

});

