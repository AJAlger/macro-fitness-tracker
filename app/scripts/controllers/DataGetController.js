/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function (){
    'use strict';

    angular.module('NutritionTracker')

        .controller('dataShow', ['$scope', 'NutritionData', function($scope, NutritionData) {

        console.log(NutritionData, new NutritionData());
    
        $scope.results = NutritionData.query();
        
        console.log($scope.results.length);
        
        
        
     
        }]);
})();