window.onload=function(){

    var oToutiao = document.getElementById('toutiao'); 

    ajax({
        type:'get',
        url:'../data/search.json',
        async:true,
        success:function(data){
            console.log(data);
            var oLi = '';
            for(var i = 0;i<data.length;i++){
                oLi +='<li><a href=" '+data[i].url+' ">'+data[i].item+'</a></li>'
            }
            oToutiao.innerHTML = oLi;
        }
    })

}