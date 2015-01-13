/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function (){
    'use strict';

    angular.module('NutritionTracker')

        .controller('dataAdd', ['$scope', 'MacroCalculation', 'NutritionData', function($scope, MacroCalculation, NutritionData) {

            $scope.macros = MacroCalculation.macros();
            $scope.totals = MacroCalculation.totals();
            $scope.sendMacros = NutritionData.save();

        }]);
})();