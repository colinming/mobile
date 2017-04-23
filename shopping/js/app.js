angular.module('starter', ['ionic','Controller'])

    .config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){

   
      $stateProvider
      
      //店家首页路由
      .state('home',{
          url:'/home',        
          templateUrl:'templates/home.html',
          controller:'homeCtrl',
          cache:false  //路由机制，可以把浏览过的页面缓存         
      })

      //订单路由
      .state('order',{
          url:'/order',
          templateUrl:'templates/order.html',
          controller:'orderCtrl'      
      })

      //提示页
      .state('tips',{
          url:'/tips',
          templateUrl:'templates/tips.html',
          controller:'tipsCtrl'
      })

   $urlRouterProvider.otherwise('/home')

}])