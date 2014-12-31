/**
 * Created by Abdullah-Mac on 12/31/14.
 */
angular.module('NutritionTracker', [])

.factory('macros', ['$http', function($http) {

        return {

            get: function() {
                return $http.get('/data/nutrition');
            },

            post: function(data) {
                return $http.post('/data/nutrition', data);
            },

            delete: function(id) {
                return $http.delete('/data/nutrition' + id);
            }
        }

    }]);