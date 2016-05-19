(function() {
    'use strict';
    angular.module('NutritionTracker')
    .controller('logoutController', logoutController);
    
    function logoutController($state, AuthService) {
        var vm = this;
        vm.logout = function() {
          AuthService.logout()
          .then(function() {
              $state.go('/login');
          });
        };
    }
})();