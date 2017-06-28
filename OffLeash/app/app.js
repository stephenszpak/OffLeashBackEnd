"use strict";

var app = angular.module("dogpark", ["ngRoute"]);

app.config(function ($routeProvider, $httpProvider) {
    $routeProvider
		.when('/auth', {
		    templateUrl: 'app/partials/auth.html',
		    controller: 'AuthCtrl'
		})
		.when('/favorite', {
		    templateUrl: 'app/partials/favorite.html',
		    controller: 'FavoriteCtrl'
		})
		.when('/search', {
		    templateUrl: 'app/partials/search.html',
		    controller: "SearchCtrl"
		})
		.when('/contacts', {
		    templateUrl: 'app/partials/contacts.html',
		    controller: 'ContactCtrl'
		})
		.when('/logout', {
		    templateUrl: 'app/partials/auth.html',
		    controller: 'AuthCtrl'
		})
		.otherwise('/auth');
});