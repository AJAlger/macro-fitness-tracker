/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function () {
    'use strict';

    angular.module('NutritionTracker')
        .factory('NutritionData', ['$resource', function ($resource) {

            return $resource('nutrition/:_id', { _id: '@_id' }, {
                
             
            });

        }]);

}());