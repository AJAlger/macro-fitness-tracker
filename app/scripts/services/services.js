/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function () {
    'use strict';

    angular.module('NutritionTracker')

        .factory('MenuItems', [function() {

            var menuItems = [
                {'label': 'Introduction', 'location': 'index'},
                {'label': 'Macronutrients', 'location': 'data'},
                {'label': 'Summary', 'location': 'summary'}
            ];

            var getMenuItems = function() {
                return menuItems;
            };

            return {
                items: getMenuItems
            }

        }])


        .factory('MacroCalculation', [function() {

        var macros = [
            {
                'type': 'Protein',
                'amount': null,
                'multiplier': 4,
                'tip': 'Calories per gram of protein',
                'total': function() {return this.amount * this.multiplier;}
            },
            {
                'type': 'Carbohydrate',
                'amount': null,
                'multiplier': 4,
                'tip': 'Calories per gram of carbohydrate',
                'total': function() {return this.amount * this.multiplier;}
            },
            {
                'type': 'Fat',
                'amount': null,
                'multiplier': 9,
                'tip': 'Calories per gram of fat',
                'total': function() {return this.amount * this.multiplier;}
            }];


        var getMacros = function() {
            return macros;
        };

        var totals = function() {
            for (var i = 0, values = 0, length = macros.length; i < length; i += 1) {
                values += macros[i].amount * macros[i].multiplier;
            }
            return values;
        };

        var getTotals = function() {
            return totals;
        };

        return {
            macros: getMacros,
            totals: getTotals
        }

    }])

        .factory('NutritionData', ['$http', function($http) {

            return  $http.get('/data/nutrition/')

            // Write all of the HTTP POST, GET and individual IDs here.

        }]);



})();