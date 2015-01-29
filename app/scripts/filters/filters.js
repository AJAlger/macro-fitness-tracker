/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function() {
    'use strict';

    angular.module('NutritionTracker')

        .filter('Percentage', ['$filter', function ($filter) {
            return function (input, decimals) {
                return $filter('number')(input * 100, decimals) + '%';
            };
             }]);

})();