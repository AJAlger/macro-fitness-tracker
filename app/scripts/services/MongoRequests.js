/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function () {
    'use strict';

    angular.module('NutritionTracker')

        // Factory to send HTTP requests to and from the server
        .factory('NutritionData', [ function() {

            var showData = function() {
                 $http.get('/nutrition').success(function (data) {
                    console.log(data);
                }).error(function (data, status) {
                    console.log(data, status);
                });
            };

            var getShowData = function() {
                return showData;
            };

            return {
                showData: getShowData
            }

        }]);



/////////////////////////////////////////////////////////////////////



            // Write all of the HTTP POST, GET and individual IDs here.




})();