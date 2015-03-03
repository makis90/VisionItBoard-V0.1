'use strict';

angular.module('visionitboardApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('chart', {
                parent: 'entity',
                url: '/charts',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/charts/charts.html',
                        controller: 'ChartsController'
                    }
                },
                resolve: {
                    mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('main');
                        return $translate.refresh();
                    }]
                }
            });
    });