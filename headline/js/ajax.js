/*
create by ming 
2016.10,27
*/ 
function ajax(obj){
    var xhr = null;
    try{
        xhr = new XMLHttpRequest();
    }catch(e){
        xhr = new activeXObject('Microsoft.XMLHTTP');
    }

    if(obj.async){
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    data = JSON.parse(xhr.responseText);
                    obj.success(data);
                }
            }
        }
        xhr.open(obj.type,obj.url,true);
        xhr.send(obj.data);
    }else{
        if(xhr.readyState==4){
            if(xhr.status==200){
                data = JSON.parse(xhr.responseText);
                obj.success(data);
            }
        }
        xhr.open(obj.type,obj.url,false);
        xhr.send(obj.data);
    }

}