(function () {
    'use strict';

    angular.module('NutritionTracker')

        .controller('MenuBar', MenuBar);

        MenuBar.$inject = ['$mdSidenav', 'MenuItems'];

        function MenuBar($mdSidenav, MenuItems) {

            var vm = this;

            vm.lists = MenuItems.items();

            vm.openMenu = function () {
                $mdSidenav('left').toggle();
            };

        }


}());