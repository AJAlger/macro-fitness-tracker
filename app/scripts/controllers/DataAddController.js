/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function (){
    'use strict';

    angular.module('NutritionTracker')

        .controller('dataAdd', ['$scope', 'MacroCalculation', 'NutritionData', function($scope, MacroCalculation, NutritionData) {
            
            $scope.macros = MacroCalculation.macros();
            $scope.totals = MacroCalculation.totals();
            
            // Add new macro information 
            $scope.addMacro = function() {
                var newMacro = {};
                for(var type in $scope.macros) {
                 var thisMacro = {
                     "protein": $scope.macros.total,
                     "carbohydrate": $scope.macros.total,
                     "fat": $scope.macros.total
                 }
                 newMacro[$scope.macros.type] = thisMacro;
                  
                }
                
                NutritionData.save(newMacro);
                
                console.log(newMacro);
            };
        
            
                // var macroObj = {};
                
                // for(var amount in $scope.macros) {
                //     var thisMacro = {
                //         "protein": $scope.macros.amount,
                //         "carbohydrate": $scope.macros.amount,
                //         "fat": $scope.macros.amount
                //   }
                //     macroObj[$scope.macros.type] = thisMacro;
                //     console.log(thisMacro);
                // }
                
                // macroObj.totals = $scope.totals();
                // NutritionData.save(macroObj)
                // console.log(macroObj);
             
           
            
        }]);
})();