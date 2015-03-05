/**
 * Created by Abdullah-Mac on 3/4/15.
 */
(function() {

    'use strict';

    angular.module('NutritionTracker')

        .controller('dataAverage', ['$scope', 'NutritionData', function($scope, NutritionData) {

            $scope.dataAvg = function() {
               var allData = NutritionData.query();

                console.log(allData);


            };


        }]);

})();