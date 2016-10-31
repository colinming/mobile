angular.module('Service',[])

    .service('request1',['$http','$rootScope',function($http,$rootScope){
        return{
            'Nav':function(){
                $http
                .get('js/nav.json')
                .then(function(data){
                    // console.log(data);
                    $rootScope.$broadcast('nav',data.data);
                },function(error){
                    alert(error);
                })
            },

            'Home':function(){
                $http
                .get('js/groups.json')
                .then(function(data){
                    console.log(data.data);
                    $rootScope.$broadcast('Homes',data.data);
  
                },function(error){
                    alert(error);
                })
            }
        }
    }])