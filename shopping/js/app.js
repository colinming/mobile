angular.module('starter', ['ionic','Controller'])

.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('home',{ // 店家首页路由
        url: '/home',        
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl',
        cache: false  // 路由机制，可以把浏览过的页面缓存         
    })

    .state('order',{ // 订单路由
        url: '/order',
        templateUrl: 'templates/order.html',
        controller: 'orderCtrl'      
    })

      
    .state('tips',{ // 提示页
        url:'/tips',
        templateUrl:'templates/tips.html',
        controller:'tipsCtrl'
    })

    $urlRouterProvider.otherwise('/home') // 默认页面

}])