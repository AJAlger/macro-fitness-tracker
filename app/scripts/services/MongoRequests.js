/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function () {
    'use strict';

    angular.module('NutritionTracker')

        // Factory to send HTTP requests to and from the server
        .factory('NutritionData', ['$http', function($http) {

            return  $http.get('/data/nutrition');

        }]);



/////////////////////////////////////////////////////////////////////



            // Write all of the HTTP POST, GET and individual IDs here.




})();