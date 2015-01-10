/**
 * Created by Abdullah-Mac on 1/10/15.
 */
(function() {
    'use strict';

    angular.module('NutritionTracker')

        .factory('d3Factory', [ function() {

            // D3 code

            var d3;

            var color = d3.scale.category10();
            var data = [10, 30, 50];
            var width = 300;
            var height = 300;
            var min = Math.min(width, height);
            var svg = d3.select(element[0]).append('svg');
            var pie = d3.layout.pie().sort(null);
            var arc = d3.svg.arc()
                .outerRadius(min / 2 * 0.9)
                .innerRadius(min / 2 * 0.5);

            svg.attr({width: width, height: height});

            var g = svg.append('g')
                .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

            g.selectAll('path').data(pie(data))
                .enter()
                .append('path')
                .style('stroke', 'white')
                .attr('d', arc)
                .attr('fill', function(d, i) {
                    return color(i)
                });

        return d3;


        }]);
})();