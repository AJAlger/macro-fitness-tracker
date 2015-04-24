(function () {
    'use strict';

    angular.module('NutritionTracker')

        .controller('MenuBar', MenuBar);

        function MenuBar($mdSidenav, MenuItems) {

            var vm = this;

            vm.lists = MenuItems.items();

            vm.openMenu = function () {
                $mdSidenav('left').toggle();
            };

        }


}());