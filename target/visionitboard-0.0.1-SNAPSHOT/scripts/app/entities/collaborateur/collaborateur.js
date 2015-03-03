'use strict';

angular.module('visionitboardApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('collaborateur', {
                parent: 'entity',
                url: '/collaborateur',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'visionitboardApp.collaborateur.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/collaborateur/collaborateurs.html',
                        controller: 'CollaborateurController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('collaborateur');
                        return $translate.refresh();
                    }]
                /*,resolvedCollaborateur: ['Collaborateur', function (Collaborateur) {
                        return Collaborateur.query().$promise;
                    }]
                    */
                }
            })
            .state('collaborateurDetail', {
                parent: 'entity',
                url: '/collaborateur/:id',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'visionitboardApp.collaborateur.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/collaborateur/collaborateur-detail.html',
                        controller: 'DetailsCollaborateurController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('collaborateur');
                        return $translate.refresh();
                    }]
                }
            })
            .state('collaborateurDetails', {
                parent: 'entity',
                url: '/collaborateur/:type/:row/:col',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'visionitboardApp.collaborateur.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/collaborateur/collaborateurs.html',
                        controller: 'CollaborateurController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('collaborateur');
                        return $translate.refresh();
                    }]
                /*,resolvedCollaborateur: ['Collaborateur', function (Collaborateur) {
                        return Collaborateur.query().$promise;
                    }]
                    */
                }
            });
            
    });
