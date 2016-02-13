/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function () {
    'use strict';

    angular.module('NutritionTracker')

        // Factory to do the calculations on the calorie page
        .factory('MacroCalculation', MacroCalculation);

        function MacroCalculation() {

            var macros = [
                {
                    'type': 'protein',
                    'amount': 0,
                    'multiplier': 4,
                    'tip': 'Calories per gram of protein',
                    'total': function () { return this.amount * this.multiplier; }
                },
                {
                    'type': 'carbohydrate',
                    'amount': 0,
                    'multiplier': 4,
                    'tip': 'Calories per gram of carbohydrate',
                    'total': function () { return this.amount * this.multiplier; }
                },
                {
                    'type': 'fat',
                    'amount': 0,
                    'multiplier': 9,
                    'tip': 'Calories per gram of fat',
                    'total': function () { return this.amount * this.multiplier; }
                }];


            var getMacros = function () {
                return macros;
            };

            var totals = function () {
                for (var i = 0, values = 0; i < macros.length; i += 1) {
                    if (macros[i].amount >= 0) {
                        values += macros[i].amount * macros[i].multiplier;
                    } else {
                        macros[i].amount = null;
                    }
                }
                return values;
            };

            var getTotals = function () {
                return totals;
            };

            return {
                macros: getMacros,
                totals: getTotals
            };

        }
}());