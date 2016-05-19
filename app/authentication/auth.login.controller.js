(function() {
    'use strict';
    angular.module('NutritionTracker')
    .controllr('loginController', loginController);
    
    function loginController($state, AuthService) {
        var vm = this;
        vm.login = function() {
            vm.error = false;
            vm.disabled = true;
            
            AuthService.login(vm.loginForm.username, vm.loginForm.password)
            .then(function() {
                $state.go('/');
                vm.disabled = false;
                vm.loginForm = {};
            })
            .catch(function () {
                vm.error = true;
                vm.errorMessage = "Invalid username and/or password";
                vm.disabled = false;
                vm.loginForm = {};
            });
        };
    }
})();