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
        
    });

}());


