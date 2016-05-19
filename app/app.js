(function () { // Wrapped AngularJS App in an IIFE
    'use strict';

    angular.module('NutritionTracker', [
        'ngMaterial',
        'ngMessages',
        'ui.router',
        'ngResource',
        'ngAnimate',
        'angularMoment'
    ])
    .config(function($mdThemingProvider) {
       $mdThemingProvider.theme('altTheme');
        
    })
    
    .run(function ($rootScope, $state, AuthService) {
        $rootScope.$on('$routeChangeStart',
        function (event, next, current) {
            if (AuthService.isLoggedIn() === false) {
            $state.go('/login');
        }
    });
});

}());


