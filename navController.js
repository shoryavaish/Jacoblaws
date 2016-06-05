
	 /* var app = angular.module("app", []);*/
	  
	  app.controller('navController', function($scope) {
            $scope.Home = {};
            $scope.Home.name = "Home";
            $scope.Home.view  = "home";

            $scope.About = {};
            $scope.About.name = "About";
            $scope.About.view  = "about";
         });
         
         app.directive('navigation', function() {
            var directive = {};
            directive.restrict = 'E';
            directive.template = "<div><ul><li><a data-ui-sref ='{{navigation.view}}' >{{navigation.name}}</a></li></ul></div>";
            
            directive.scope = {
			      navigation : "=name"
            };
            
            directive.compile = function(element, attributes) {
               //element.css("border", "1px solid #cccccc");
               
               var linkFunction = function($scope, element, attributes) {
                  element.html("<ul class='navigation'><li><a data-ui-sref="+$scope.navigation.view + ">"+$scope.navigation.name + "</a></li></ul>");
                  //element.css("background-color", "#ff00ff");
               }
               return linkFunction;
            }
            
            return directive;
         });
         
         