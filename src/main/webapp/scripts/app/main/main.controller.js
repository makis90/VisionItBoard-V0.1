'use strict';

angular.module('visionitboardApp')
    .controller('MainController', function ($scope, Principal) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
           // $state.go('chart');
        });
    });
