(function() {
  'use strict';

  angular.module('NutritionTracker')
      .factory('AddMacros', AddMacros);

  function AddMacros(MacroCalculation, NutritionData) {

    var macros = MacroCalculation.macros();

    var addMacro = function() {

      var newMacro = new NutritionData();

      newMacro.date = this.date;

      for (var key in macros) {
        var thisMacro = {};
        thisMacro = macros[key].total();
        newMacro[macros[key].type] = thisMacro;
      }

      newMacro.$save();

    };

    var saveMacro = function() {
      return addMacro;
    };

    return {
      saveMacro: saveMacro
    }

  }

})();