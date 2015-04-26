/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function () {
    'use strict';

    angular.module('NutritionTracker')

        .controller('dataAdd', dataAdd);

            function dataAdd(MacroCalculation, NutritionData) {

                var vm = this;

                vm.macros = MacroCalculation.macros();
                vm.totals = MacroCalculation.totals();

            // Add new macro information 
                vm.addMacro = function() {
                    var newMacro = new NutritionData();
                
                    newMacro.date = vm.date;

                    console.log(newMacro.date);
                
                    for (var key in vm.macros) {
                        var thisMacro = {};
                        thisMacro = vm.macros[key].total();
                        newMacro[vm.macros[key].type] = thisMacro;
                    }

                    newMacro.$save();
                
                };


        }
}());