/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function (){
    'use strict';

    angular.module('NutritionTracker')

        .controller('dataShow', ['$scope', 'NutritionData', function($scope, NutritionData) {

        $scope.results = NutritionData.query();
      

        }]);
})();