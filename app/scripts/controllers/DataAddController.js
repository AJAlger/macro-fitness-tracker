/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function (){
    'use strict';

    angular.module('NutritionTracker')

        .controller('dataAdd', ['$scope', 'MacroCalculation', 'NutritionData', function($scope, MacroCalculation, NutritionData) {
            
            $scope.macros = MacroCalculation.macros();
            $scope.totals = MacroCalculation.totals();
            
            console.log($scope.macros);
            
            // Add new macro information 
            $scope.addMacro = function() {
                var macro = new NutritionData({
                   
              });
              
                
            };
           
            
            console.log($scope.macros.total);
        }]);
})();