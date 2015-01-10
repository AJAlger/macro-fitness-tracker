/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function() {
    'use strict';

    angular.module('NutritionTracker')

        .directive('macroGraph', [ function() {

            function link(scope, element, attr) {



            }

            return {
                linker: link,
                restrict: 'E'
            }


        }]);

})();