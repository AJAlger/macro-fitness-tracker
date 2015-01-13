/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function () {
    'use strict';

    angular.module('NutritionTracker')
        .factory('NutritionData', ['$resource', function($resource) {

            return $resource('data/nutrition/:nutrition_id', {}, {
                query: {method: 'GET', isArray: true},
                save: {method: 'POST'}
            });


        }]);

})();