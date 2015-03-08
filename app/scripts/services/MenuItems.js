/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function () {
    'use strict';

    angular.module('NutritionTracker')

        // Factory to produce menu items
        .factory('MenuItems', [function () {

            var menuItems = [
                {'label': 'Introduction', 'location': 'index'},
                {'label': 'Macronutrients', 'location': 'data'},
                {'label': 'Averages', location: 'averages'},
                {'label': 'Summary', 'location': 'summary'}
            ];

            var getMenuItems = function () {
                return menuItems;
            };

            return {
                items: getMenuItems
            };

        }]);
}());