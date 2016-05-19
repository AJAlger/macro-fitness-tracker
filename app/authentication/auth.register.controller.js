(function() {
    'use strict';
    angular.module('NutritionTracker')
    .controller('registerController', registerController);
    
    function registerController($state, AuthService) {
        var vm = this;
        vm.register = function() {
            vm.error = false;
            vm.disabled = true;
            
            AuthService.register(vm.registerForm.username, vm.registerForm.password)
            .then(function () {
                $state.go('/login');
                vm.disabled = false;
                vm.registerForm = {};
            })
            .catch(function () {
                vm.error = true;
                vm.errorMessage = "Something went wrong!";
                vm.disabled = false;
                vm.registerForm = {};
            });
        };
    }
})();