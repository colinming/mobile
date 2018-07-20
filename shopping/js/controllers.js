angular.module('Controller', ['Service'])

/*****************
$scope、$rootScope：
    使用 $scope 定义的变量或者函数，    
    在指定的 controller 控制的页面作用域中才能被识别；
    
    如果直接使用 var 声明变量或者函数, 不能被页面获取到, 无法作用到页面中 

******************/

/******* 主页控制器 ********/
.controller('homeCtrl', ['$scope', 'request1', '$rootScope', function($scope, request1, $rootScope){
    request1.Home(); // 调用 service 中的方法初始化数据
    request1.Nav();
    
    $rootScope.total = 0; // 创建跨控制器的变量
    $rootScope.ifHas = false;
    $rootScope.orderConfirm = [];

    if(localStorage.orderConfirm){
        $rootScope.orderConfirm = JSON.parse(localStorage.orderConfirm);
        $rootScope.ifHas = true;         
    };

    $scope.$on('nav',function(event,data){ // 监听 service 中广播过来的数据
        $scope.nav = data;
    })

    $scope.$on('Homes',function(event,data){
        $scope.dataAll = data;
        $scope.items = data[0];
        angular.forEach($scope.items.items, function(data, index){
            angular.forEach($rootScope.orderConfirm, function(DATA, i){
                if(data.id == DATA.id){
                    data.cnt = DATA.cnt;
                }
            })
        })

        angular.forEach($rootScope.orderConfirm, function(DATA,i){
            $rootScope.total += DATA.cnt;
        })

    });

    $scope.chooseNav = function(index){ // 点击侧边栏
        angular.forEach($scope.nav, function(data, index){
            data.choose = false;
        });
        $scope.nav[index].choose = true;
        $scope.items = $scope.dataAll[index];

        angular.forEach($scope.items.items, function(data, index){

            angular.forEach($rootScope.orderConfirm, function(DATA, i){
                if(data.id == DATA.id){
                    data.cnt = DATA.cnt;
                }
            })
        })

    }; 

    $scope.add = function(index){ 
        $scope.items.items[index].cnt++;
        $rootScope.total++;
        $rootScope.ifHas = true;

        var oTurn = false;

        angular.forEach($rootScope.orderConfirm, function(data, i){
            if(data.id == $scope.items.items[index].id){
                oTurn = true;
                $rootScope.orderConfirm[i] = $scope.items.items[index];
            }
        });

        if(!oTurn){
            $rootScope.orderConfirm.push($scope.items.items[index]);
        }  
        localStorage.orderConfirm = JSON.stringify($rootScope.orderConfirm);
              
    }; 
    
    $scope.subtract = function(index){ 
        if($scope.items.items[index].cnt == 0){
            $scope.items.items[index].cnt = 0
        }else{
            $scope.items.items[index].cnt--;
            $rootScope.total--;
        };

        if($rootScope.total == 0){
            $rootScope.ifHas = false;
            localStorage.clear();
        }else{
            angular.forEach($rootScope.orderConfirm, function(datas, m){
                if(datas.id == $scope.items.items[index].id){
                    $rootScope.orderConfirm[m] = $scope.items.items[index];
                }
            })

            localStorage.orderConfirm = JSON.stringify($rootScope.orderConfirm);
        }

    };

    $scope.nextPage = function(){
        window.location.href = "#/order";
    };
}])

    
/************* 订单控制器 **************/
.controller('orderCtrl', ['$scope', '$rootScope', '$ionicPopup', function($scope, $rootScope, $ionicPopup){
    $scope.goHome = function(){
        window.location.href = "#/home";
    };

   
    $scope.add = function(index){ // 订单页增加菜品
        $rootScope.orderConfirm[index].cnt++;
        $rootScope.total++;
        $rootScope.ifHas = true;

        localStorage.orderConfirm = JSON.stringify($rootScope.orderConfirm);
    };

    
    $scope.subtract = function(index){ // 订单页减少菜品
        if($rootScope.orderConfirm[index].cnt <= 0){
            $rootScope.orderConfirm[index].cnt = 0;
        }else{
            $rootScope.orderConfirm[index].cnt--;
            $rootScope.total--;
        };

        if($rootScope.total == 0){
            $rootScope.ifHas=false;
            localStorage.clear();
        }else{
            localStorage.orderConfirm = JSON.stringify($rootScope.orderConfirm);
        }
    };

    
    $scope.showConfirm = function() { // 弹窗函数
        varconfirmPopup = $ionicPopup.confirm({
            cssClass: 'popUp',
            template: '确定让厨房开始制作菜品了吗?',
            buttons: 
                [
                    { 
                        text: '取消',
                        type: 'cancel-button',
                        onTap: function(e) {

                        }
                    }, 
                    {
                        text: '确定',
                        type: 'confirm-button',
                        onTap: function(e) {
                            window.location.href = "#/tips";
                        }
                    }
                ]
        });
    }
}]) 

/***************** tips控制器 ******************/
.controller('tipsCtrl', ['$scope', '$rootScope', function($scope, $rootScope){

    $scope.backHome = function(){
        localStorage.clear(); // 提交数据之后，清掉购物车缓存数据
        window.location.href = "#/home"
    }

}])