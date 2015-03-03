'use strict';

angular.module('visionitboardApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
