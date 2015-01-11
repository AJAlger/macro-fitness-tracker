/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function () {
    'use strict';

    angular.module('NutritionTracker')

        // Factory to send HTTP requests to and from the server
        .factory('NutritionData', ['$resource', function($resource) {

            return $resource('data/nutrition', {}, {
                query: {method: 'GET', isArray: true}
            });


        }]);



/////////////////////////////////////////////////////////////////////



            // Write all of the HTTP POST, GET and individual IDs here.




})();