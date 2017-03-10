var app = angular.module('myapp', ['ui.router']);
app.controller('RootCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.tabType = 1;
}]);
app.controller('RootCtrl1', ['$scope', '$state', function($scope, $state) {
	$scope.tabType = 2;
}]);
app.run(['$rootScope','$state',function($rootScope,$state){
	$rootScope.tabSelect = function(num,obj) {
		obj.tabType = num;
	};
	$rootScope.$on('$stateChangeStart',function (event, toState, toParams, fromState, fromParams, $localStorage) {
		
	});
}])
app.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$provide', '$compileProvider', '$filterProvider', function($stateProvider, $urlRouterProvider, $controllerProvider, $provide, $compileProvider, $filterProvider) {
	app.controller = $controllerProvider.register;
	app.directive = $compileProvider.directive;
	app.filter = $filterProvider.register;
	app.factory = $provide.factory;
	app.service = $provide.service;
	app.constant = $provide.constant;
	app.value = $provide.value;
	$urlRouterProvider.otherwise("/tab/index"); //未定义的页面显示还是需要ngRoute的otherwise成员方法定义  
	$stateProvider
		.state('tab', {
			url: '/tab',
			abstract: true,
			templateUrl: 'view/tab.html',
			controller: 'RootCtrl'
		})
		.state('tab1', {
			url: '/tab1',
			abstract: true,
			templateUrl: 'view/tab1.html',
			controller: 'RootCtrl1'
		})
		.state('tab.index', {
			url: '/index',
			views: {
				'': {
					templateUrl: 'view/main.html'
				}
			}
		})
		.state('tab1.dd', {
			url: '/dd',
			views: {
				'': {
					templateUrl: 'view/dd.html'
				}
			}
		})
		.state('tab1.pt', {
			url: '/pt',
			views: {
				'': {
					templateUrl: 'view/pt.html'
				}
			}
		})
		.state("tab.list", {
			url: "/list",
			views: {
				'': {
					templateUrl: 'view/list.html'
				}
			}
		})
		.state("tab.detail", {
			url: "/detail",
			views: {
				'': {
					templateUrl: 'view/detail.html'
				}
			}
		})
}]);