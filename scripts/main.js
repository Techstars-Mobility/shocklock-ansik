/* 
 Initialization
 */

var app = angular.module('ShockLockWebsite', ['firebase', 'ui.router', 'ngAnimate', 'angular-carousel']);

var remoteDB = new Firebase('https://shocklock-website.firebaseio.com');

/*
 Routing And Stuff
 */

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html',
            controller: 'aboutCtrl'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact.html',
            controller: 'contactCtrl'
        })

});

/*
 Controllers
 */

app.controller('homeCtrl', function ($scope) {

    /*
     Initialization
     */

    /*
     Ui Tweaks
     */

});

app.controller('contactCtrl', function ($scope) {

    /*
     Initialization
     */

    /*
     Ui Tweaks
     */

});

app.controller('aboutCtrl', function ($scope) {

    /*
     Initialization
     */

    /*
     Ui Tweaks
     */

});

/*
 Directives
 */