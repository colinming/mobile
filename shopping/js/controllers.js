angular.module('Controller',['Service'])
    
/*******第一页商家主页控制器********/
    .controller('homeCtrl',['$scope','request1','$rootScope',function($scope,request1,$rootScope){

        //点菜总数初始化
        $rootScope.total = 0;

        //判断按钮是否高亮
        $rootScope.ifHas=false;

        //内容请求数据
        request1.Home();

        //左侧菜单请求数据
        request1.Nav();

        //存放第一页购物车里push进来的菜品数据
        $rootScope.orderConfirm=[];

        //定义全局变量，存储上一次购物车数据
        var orderData = [];

        //首先判断localStorage.orderConfirm里面是否有值
        //如果没有值，就不做处理
        if(localStorage.orderConfirm){

            //console.log(typeof localStorage.orderConfirm);
            
            $rootScope.orderConfirm = JSON.parse(localStorage.orderConfirm);

            //同时激活按钮
            $rootScope.ifHas=true;
            
        };

        $scope.$on('nav',function(event,data){
            $scope.nav=data;
        })

        $scope.$on('Homes',function(event,data){
            $scope.dataAll=data;
             $scope.items =data[0]
        
            //console.log(data[0]);
            
            //循环拿到的数据
            angular.forEach($scope.items.items,function(data,index){
                //循环localStorage数据
                angular.forEach($rootScope.orderConfirm,function(DATA,i){
                    if(data.id==DATA.id){
                        data.cnt=DATA.cnt;
                    }
                })
            })

            //刷新页面，首先把上一次购物车的总数显示出来
            angular.forEach($rootScope.orderConfirm,function(DATA,i){
                $rootScope.total+=DATA.cnt;
            })

        }); //详情数据

            
        $scope.chooseNav=function(index){
            angular.forEach($scope.nav,function(data,index){
                data.choose=false;
            });
            $scope.nav[index].choose = true;
            $scope.items = $scope.dataAll[index];
            //console.log(index);
            
            //循环拿到的数据
            angular.forEach($scope.items.items,function(data,index){
                //循环localStorage数据
                angular.forEach($rootScope.orderConfirm,function(DATA,i){
                    if(data.id==DATA.id){
                        data.cnt=DATA.cnt;
                    }
                })
            })


        };  //菜单切换


        $scope.add = function(index){
            $scope.items.items[index].cnt++;
            $rootScope.total++;
            $rootScope.ifHas=true;

            var oTurn = false;

            angular.forEach($rootScope.orderConfirm,function(data,i){
                      if(data.id==$scope.items.items[index].id){
                        oTurn = true;
                    $rootScope.orderConfirm[i] = $scope.items.items[index];
            }
        });

            if(!oTurn){
                $rootScope.orderConfirm.push($scope.items.items[index]);

                //console.log($rootScope.orderConfirm);
            }  
                //在这里将购物车数据赋给localStorage;
                localStorage.orderConfirm = JSON.stringify($rootScope.orderConfirm);
                  
        }; 
     
        $scope.subtract = function(index){
            if($scope.items.items[index].cnt==0){
                $scope.items.items[index].cnt=0
            }else{
                $scope.items.items[index].cnt--;
                $rootScope.total--;
            };

            if($rootScope.total==0){
                    $rootScope.ifHas = false;
                    localStorage.clear();
                }else{
                    angular.forEach($rootScope.orderConfirm,function(datas,m){
                        //通过菜品id判断存放购物车数据的数组里
                        //是否有该菜品的数据
                        if(datas.id==$scope.items.items[index].id){
                            $rootScope.orderConfirm[m]=$scope.items.items[index];
                        }
                    })

                    localStorage.orderConfirm=JSON.stringify($rootScope.orderConfirm);
                }

            };  //减少菜品


        $scope.nextPage=function(){
            window.location.href="#/order";

        };
    }])//关闭

    
/*************第二页订单控制器**************/
    .controller('orderCtrl',['$scope','$rootScope','$ionicPopup',function($scope,$rootScope,$ionicPopup){
        $scope.goHome=function(){
            window.location.href="#/home";
        };

        //订单页增加菜品
        $scope.add=function(index){
            $rootScope.orderConfirm[index].cnt++;
            $rootScope.total++;
            $rootScope.ifHas=true;

            localStorage.orderConfirm = JSON.stringify($rootScope.orderConfirm);

        };

        //订单页减少菜品
        $scope.subtract=function(index){
            if($rootScope.orderConfirm[index].cnt<=0){
                $rootScope.orderConfirm[index].cnt=0;
            }else{
                $rootScope.orderConfirm[index].cnt--;
                $rootScope.total--;
            };

            if($rootScope.total==0){
          
                $rootScope.ifHas=false;

                localStorage.clear();

            }else{
                
                localStorage.orderConfirm = JSON.stringify($rootScope.orderConfirm);

            }
        };

        //弹窗函数
         $scope.showConfirm = function() {
            varconfirmPopup = $ionicPopup.confirm({
                cssClass:'popUp',
                template:'确定让厨房开始制作菜品了吗?',
                buttons: [{ 
                        text:'取消',
                        type:'cancel-button',
                        onTap: function(e) {
                            
    					}
                    }, {
                        text: '确定',
                        type: 'confirm-button',
                        onTap: function(e) {

                            window.location.href="#/tips";

                }
              }]
            });
        }
    }]) 


/*****************第三页tips控制器******************/
    .controller('tipsCtrl',['$scope','$rootScope',function($scope,$rootScope){

        $scope.backHome=function(){

            //提交数据之后，清掉购物车缓存数据
            localStorage.clear();

            window.location.href="#/home"
        }

    }])