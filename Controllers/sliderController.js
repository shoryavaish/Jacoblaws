/*var app=angular.module('app',['ngAnimate']);*/

app.controller('SliderController', function($scope) {
    $scope.images=[{src:'447A2230.jpg',title:'Pic 1',info:'this is so cool1'},{src:'Carton-Kitchen3.jpg',title:'Pic 2',info:'this is so cool2'},{src:'CartonLiving-Resize2.jpg',title:'Pic 3',info:'this is so cool3'},{src:'loft+3.jpg',title:'Pic 4',info:'this is so cool4'},{src:'modern+beauty+6.jpg',title:'Pic 5',info:'this is so cool5'},{src:'row+house+7.jpg',title:'Pic 6',info:'this is so cool6'},{src:'town+++style+1.jpg',title:'Pic 7',info:'this is so cool7'},{src:'york+house+1.jpg',title:'Pic 8',info:'this is so cool8'}]; 
});
 
app.directive('slider', function ($timeout) {
  return {
    restrict: 'AE',
	templateUrl:"templates/slider.html",
    link: function (scope, elem, attrs) {
		console.log(scope);
		console.log(attrs);
		scope.currentIndex=0;

		scope.next=function(){
			scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
		};
		
		scope.prev=function(){
			scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1;
		};
		
		scope.$watch('currentIndex',function(){
			scope.images.forEach(function(image){
				image.visible=false;
			});
			scope.images[scope.currentIndex].visible=true;
		});
		
		/* Start: For Automatic slideshow */
		
		var timer;
		
		var sliderFunc=function(){
			timer=$timeout(function(){
				scope.next();
				timer=$timeout(sliderFunc,4000);
			},4000);
		};
		
		sliderFunc();
		
		scope.$on('$destroy',function(){
			$timeout.cancel(timer);
		});
		
		/* End : For Automatic slideshow*/
		
    }
  }
});