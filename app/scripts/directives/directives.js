/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function() {
    'use strict';

    angular.module('NutritionTracker')

        .directive('macroGraph', [ function() {

            function link(scope, element, attr) {
                
                var width = element.width;
                var height = element.height;
                var svg = d3.select(element[0])
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height);
                
                


            }

            return {
                linker: link,
                restrict: 'E',
                scope: {
                    data: '='
                }
            }


        }]);

})();