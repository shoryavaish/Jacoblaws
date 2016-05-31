app.controller('aboutController', function($scope, $http) {
	//here i ma pssing $http as dependency as i am going to use http get method for ajax
   var url = "data/about.txt";

   $http.get(url).success( function(response) {
      $scope.aboutUsContent = response; 
   });

});