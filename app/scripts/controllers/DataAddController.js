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
                var returnObject = {};
                
                for (macro in $scope.macros) {
                    var thisMacro = {
                        "field1": macro.field1,
                        "etc": macro.etc
                   }
                    returnObject[macro.type] = thisMacro;
                }
                
                returnObject.totals = macro.totals();
                NutritionData.save(returnObject)
             
            //  {
            //      "fat": {
            //          "field1": "xxx",
            //          "field2": "xxx"
            //      },
            //      "carb": {
                     
            //      },
            //      "totals": 34
            //  }
            };
           
            
        }]);
})();