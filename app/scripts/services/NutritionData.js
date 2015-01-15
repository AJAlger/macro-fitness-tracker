/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function () {
    'use strict';

    angular.module('NutritionTracker')
        .factory('NutritionData', ['$resource', function($resource) {

            return $resource('data/nutrition/:id', {
                id: '@_id'}, {
                    get: {method: 'GET', isArray: true},
                    add: {methos: 'ADD'},
                    delete: {method: 'DELETE'}
                });
                
      

        }]);

})();