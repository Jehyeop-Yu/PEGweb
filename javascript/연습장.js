var func = function(){
     var chb = document.getElementsByTagName('input');
     if(document.getElementsByTagName('input')[0].checked){
            document.getElementById('MenuList').style.color = "blue";
     }else{
        document.getElementById('MenuList').style.color = "black";
     }
 }