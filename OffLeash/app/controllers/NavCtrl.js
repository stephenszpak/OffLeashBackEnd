"use strict";

app.controller("NavCtrl", function($scope){
	$scope.navItems = [
		{
			name:"Logout",
			url:"#/logout"
		},
		{
			name:"Search",
			url:"#/search"
		},
		{
			name: "Favorites",
			url: "#/favorite"
		},
		{	name:"Friends",
			url:"#/contacts"
		}		
	];
});

$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
    }
  );