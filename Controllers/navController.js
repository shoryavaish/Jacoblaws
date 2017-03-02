
	 // var app = angular.module("app", ['ngAnimate']);
	  
	  app.controller('navController', function($scope) {
            $scope.Home = {};
            $scope.Home.name = "Home";
            $scope.Home.view  = "home";

            $scope.About = {};
            $scope.About.name = "About";
            $scope.About.view  = "about";
			
			$scope.Portfolio = {};
            $scope.Portfolio.name = "Portfolio";
            $scope.Portfolio.view  = "portfolio";
         });
         
         app.directive('navigation', function() {
            var directive = {};
            directive.restrict = 'E';
            directive.template = "<ul class='navigation'><li><a data-ui-sref ='{{navigation.view}}' >{{navigation.name}}</a></li></ul>";
            directive.scope = {
			navigation : "=name"
            };
            return directive;
         });