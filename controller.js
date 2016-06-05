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