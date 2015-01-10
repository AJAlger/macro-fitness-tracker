/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function () {
    'use strict';

    angular.module('NutritionTracker')

        .controller('dataAdd', ['$scope', 'MacroCalculation', function($scope, MacroCalculation) {

            $scope.macros = MacroCalculation.macros();
            $scope.totals = MacroCalculation.totals();

        }]);
})();