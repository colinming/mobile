window.onload=function(){
   
    ajax({
        type:'get',
        url:'../data/chanels.json',
        async:true,
        success:function(data){

            var delLi = '';
            var addLi = '';
            var delChannels = document.getElementById('delChannels');
            var addChannels = document.getElementById('addChannels');

            for(var i = 0;i<data.delChannel.length;i++){
                delLi +='<li><a href="javascript:;">'+data.delChannel[i].channel+'</a></li>';
            }
            delChannels.innerHTML = delLi;

            for(var i = 0;i<data.addChannel.length;i++){
                addLi +='<li><a href="javascript:;">'+data.addChannel[i].channel+'</a></li>';
            }
            addChannels.innerHTML = addLi;

        }
    })


    


}