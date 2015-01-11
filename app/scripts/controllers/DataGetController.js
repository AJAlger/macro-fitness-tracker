/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function (){
    'use strict';

    angular.module('NutritionTracker')

        .controller('dataShow', ['$scope', 'NutritionData', function($scope, NutritionData) {

            NutritionData.success(function(data){$scope.results = data;})
                .error(function(data, status){console.log(data, status); $scope.results = [];});



        }]);
})();