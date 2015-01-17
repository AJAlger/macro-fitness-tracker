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
                for(var macro in $scope.macros) {
                    var macroObj = {
                        "protein":  macro.amount,
                        "carbohydrate": macro.amount,
                        "fat": macro.amount
                    }
                    macroObj[$scope.macros.type] = macroObj;
                    console.log('macroobj: ',  macroObj);
                    console.log('macro type: ',  $scope.macros.type);
                };
                
                NutritionData.save(newMacro);
                console.log('new macro: ',  newMacro);
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