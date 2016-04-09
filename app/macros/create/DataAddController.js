/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function () {
    'use strict';

    angular.module('NutritionTracker')
        .controller('dataAdd', dataAdd);

            function dataAdd(MacroCalculation, AddMacros) {
                var vm = this;
                vm.macros = MacroCalculation.macros();
                vm.totals = MacroCalculation.totals();
                vm.addMacro = AddMacros.saveMacro();
            }
}());