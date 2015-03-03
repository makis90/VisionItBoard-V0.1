'use strict';

angular.module('visionitboardApp')
    .factory('Collaborateur', function ($resource) {
        return $resource('api/collaborateurs/:idmobRess', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            }
        });
    });
