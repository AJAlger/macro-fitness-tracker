/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function(){
    'use strict';

    angular.module('NutritionTracker')

        .controller('dataAdd', ['$scope', 'MacroCalculation', 'NutritionData', function($scope, MacroCalculation, NutritionData) {
            
            $scope.macros = MacroCalculation.macros();
            $scope.totals = MacroCalculation.totals();

            // Add new macro information 
            $scope.addMacro = function() {
                var newMacro = new NutritionData();
              
                newMacro.date = $scope.date;
                for(var key in $scope.macros) {
                  var thisMacro = {};
                    thisMacro = $scope.macros[key].total();
                    newMacro[$scope.macros[key].type] = thisMacro;

                };
                
                newMacro.$save();
               
                console.log(newMacro);
                
            };
           
        }]);
})();