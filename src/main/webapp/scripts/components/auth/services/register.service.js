'use strict';

angular.module('visionitboardApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


