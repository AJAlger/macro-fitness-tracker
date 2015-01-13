/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function (){
    'use strict';

    angular.module('NutritionTracker')

        .controller('dataAdd', ['$scope', 'MacroCalculation', 'NutritionData', function($scope, MacroCalculation, NutritionData) {
            
            $scope.save = function() {
                var newMacro = new NutritionData({
                     total: $scope.macro.amount
            
                });
                
                newMacro.$save(function(){
                   $scope.results.push(newMacro); 
                   $scope.macro.amount = '';
                });
            };
            
            $scope.macros = MacroCalculation.macros();
            $scope.totals = MacroCalculation.totals();
            $scope.sendMacros = NutritionData.save();
            
        }]);
})();