(function () {
    'use strict';

    angular.module('NutritionTracker')

        .controller('MenuBar', ['$scope', '$mdSidenav', 'MenuItems', function($scope, $mdSidenav, MenuItems) {

        $scope.items = MenuItems.items();

        $scope.openMenu = function() {
            $mdSidenav('left').toggle();
        };

    }]);


})();