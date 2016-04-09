(function() {
    'use strict';
    
    angular.module('NutritionTracker')
    .factory('AuthService', AuthService);
    
    function AuthService($q, $timeout, $http) {
        
        var user = null;
        
        return ({
           isLoggedIn: isLoggedIn,
           getUserStatus: getUserStatus,
           login: login,
           logout: logout,
           register: register 
        });
        
        function isLoggedIn() {
           return user ? true : false;
        }
        
        function getUserStatus() {
            return user;
        }
        
        function login(username, password) {
            var deferred = $q.defer();
            
            $http.post('/login', {username: username, password: password})
            .success(function (data, status) {
                if (status === 200 & data.status) {
                    user = true;
                    deferred.resolve();
                } else {
                    user = false;
                    deferred.reject();
                }
            })
            .error(function(data) {
                user = false;
                deferred.reject();
            });
            return deferred.promise;
        }
        
        function logout() {
            var deferred = $q.defer();
            
            $http.get('/logout')
            .success(function(data) {
                user = false;
                deferred.resolve();
            })
            .error(function(data) {
                user = false;
                deferred.reject();
            });
            return deferred.promise;
        }
        
        function register(username, password) {
            var deferred = $q.defer();
            
            $http.post('/register', {username: username, password: password})
            .success(function(data, success) {
                if (status === 200 & data.status) {
                    user = true;
                    deferred.resolve();
                } else {
                    user = false;
                    deferred.reject();
                }
            })
            .error(function(data) {
                user = false;
                deferred.reject();
            });
            return deferred.promise;
        }
        
    }
    
    
})();