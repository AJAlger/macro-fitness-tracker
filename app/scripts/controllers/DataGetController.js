/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function (){
    'use strict';

    angular.module('NutritionTracker')

        .controller('dataShow', ['$scope', 'NutritionData', function($scope, NutritionData) {

         $scope.results = NutritionData.query();
        
             // Make a delete button here.
        $scope.deleteRecord = function(macro){
            NutritionData.delete(macro);
            _.remove($scope.results, macro);
        };
            
     
        }]);
})();