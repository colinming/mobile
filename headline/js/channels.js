/*
    频道管理页面
*/ 
window.onload = function(){
    var delChannels = document.getElementById('delChannels');
    var addChannels = document.getElementById('addChannels');
 
    ajax({
        type:'get',
        url:'../data/chanels.json',
        async:true,
        success:function(data){

            var delLi = '';
            var addLi = '';
            
            for(var i = 0;i<data.delChannel.length;i++){
                delLi +='<li><a href="javascript:;">'+data.delChannel[i].channel+'</a></li>';
            }
            delChannels.innerHTML = delLi;

            for(var i = 0;i<data.addChannel.length;i++){
                addLi +='<li><a href="javascript:;">'+data.addChannel[i].channel+'</a></li>';
            }
            addChannels.innerHTML = addLi;

          
            var delLis = delChannels.getElementsByTagName('li');
            var addLis = addChannels.getElementsByTagName('li');

            //删除频道
            for(var i = 1;i<delLis.length;i++){

                delLis[i].onclick = function(){
                    
                    delChannels.removeChild(this);
                    
                    addChannels.appendChild(this);
                    
                }

            }

            //增加频道
            for(var i = 0;i<addLis.length;i++){

                addLis[i].onclick = function(){

                    addChannels.removeChild(this);
                    
                    delChannels.appendChild(this);

                }

            }


        }
    })





}
  





    
