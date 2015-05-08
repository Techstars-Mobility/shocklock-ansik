/* 
 Initialization
 */

var app = angular.module('ShockLockWebsite', ['firebase', 'ui.router', 'ngAnimate']);

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

        .state('testimonials', {
            url: '/testimonials',
            templateUrl: 'partials/testimonials.html',
            controller: 'testimonialsCtrl'
        })

});

/*
 Controllers
 */

app.run(function($rootScope, $state) {

    $rootScope.active_tab = 1;

    $rootScope.update_tab = function (index) {

        $rootScope.active_tab = index;

        if (index === 1) {

            $state.go('home');

        } else if (index === 2) {

            OpenInNewTab('https://medium.com/@shocklock');

        } else if (index === 3) {

            $state.go('about');

        } else if (index === 4) {

            $state.go('testimonials');

        } else if (index === 5) {

            $state.go('contact');

        } else if (index === 6) {

            OpenInNewTab('https://www.dropbox.com/sh/g300m0ymm1o0nvk/AAB1LOJHlLo_q6o1wr8gQhlJa?n=377017434#/');

        }

    }

});

app.controller('homeCtrl', function ($scope, $rootScope) {

    /*
     Initialization
     */

    /*
     Ui Tweaks
     */

});

app.controller('contactCtrl', function ($scope, $rootScope) {

    /*
     Initialization
     */

    /*
     Ui Tweaks
     */

});

app.controller('aboutCtrl', function ($scope, $rootScope) {

    /*
     Initialization
     */

    /*
     Ui Tweaks
     */

});

app.controller('testimonialsCtrl', function ($scope, $rootScope) {

    /*
     Initialization
     */

    $scope.ambassadors = [

        {

            name: "Gil Anchondo",

            bio: "A rising celebrity auto body painter that has already worked with the" +
            " likes of Rich Evans and the cast MTV’s Pimp My Ride. Currently as the" +
            " owner TCH Custom Designs in California, he helps people drive their" +
            " vision. As an expert in the industry, Gil knows the safety, power and" +
            " reliability of the Shocklock.",

            picture: "http://i.imgur.com/Pfu6Q9d.jpg",

            images: [

                "http://www.shocklock.ca/resources/4S2A4863.jpg",
                "http://www.shocklock.ca/resources/4S2A4860.jpg",
                "http://www.shocklock.ca/resources/4S2A4847.jpg",
                "http://www.shocklock.ca/resources/4S2A4846.jpg"

            ],

            comments: [

                {

                    content: "ShockLock is my go-to solution when I have customers with failed gas struts, and I wouldn't use anything else!",

                    by:"Ivan, Master Technician @ Speedy Auto Service"

                },

                {

                    content: "I love the ShockLock, and I would recommend it to anyone in the automotive industry.",

                    by: "Chad Bennett, Service Advisor @ Meineke Car Care"

                },

                {

                    content: "Works amazing, safest tool to service vehicles with weak gas strut support.",

                    by: "Kerry Becker, Master Technician @ Ron's Auto "

                }

            ],

            links: {

                website: "",

                instagram: "",

                facebook: "",

                twitter: ""

            }

        }

    ];

    $scope.activeID = 0;
    $scope.active = $scope.ambassadors[0];

    $scope.setActive = function (index) {

        $scope.activeID = index;
        $scope.active = $scope.ambassadors[index];

    };

    /*
     Ui Tweaks
     */

});

/*
 Directives
 */


/*
 Helpers
 */

function OpenInNewTab(url) {

    var win = window.open(url, '_blank');

    win.focus();

}