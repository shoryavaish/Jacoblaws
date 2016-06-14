app.controller('homeController', function($scope, $http) {
   var url = "data/home.json";
   $http.get(url).success( function(response) {
      $scope.sliderImages = response.sliders; 
      console.log($scope.sliderImages);
   });
});


app.controller('aboutController', function($scope, $http) {
   var url = "data/about.txt";
   $http.get(url).success( function(response) {
      $scope.aboutUsContent = response; 
   });
});

app.controller('portfolioController', function($scope, $http) {
   var url = "data/portfolio.json";
   $http.get(url).success( function(response) {
      $scope.projects = response.portfolio; 
   });
});

//-----For editable text------
app.controller('TextareaCtrl', function($scope, $http) {
	var url = "data/about.txt";
	 $http.get(url).success( function(response) {
      $scope.aboutUsContent = response; 
   });
});

app.controller("serviceController",function($scope,display){
	/*var msg=document.myForm.message.value;*/
	$scope.input={
		msg:''
	};
	$scope.msgBox=function(){
	$scope.msg=display.msgBox($scope.msg)
	console.log($scope.msg);
	//$scope.message=display(msg);
	};
});
  