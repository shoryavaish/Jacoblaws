var app = angular.module('app', ['ui.router','ngAnimate','xeditable']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
			controller:'homeController'
        })
        

        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
			controller:'aboutController'
        })

		
		.state('portfolio', {
            url: '/portfolio',
            templateUrl: 'views/portfolio.html',
            controller:'portfolioController'
        });
		
});