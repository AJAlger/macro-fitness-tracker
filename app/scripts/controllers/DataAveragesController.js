/**
 * Created by Abdullah-Mac on 3/4/15.
 */
(function () {

    'use strict';

    angular.module('NutritionTracker')

        .controller('dataAverage', ['$scope', 'NutritionData', function ($scope, NutritionData) {

           
                var allData = NutritionData.query();
                
                
                var protein = [];
                
                for(var key in allData) {
                    protein.push(allData[key], protein);
                    
                }
                
                console.log(protein);


            
        }]);

}());