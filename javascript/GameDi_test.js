var startClick = function(){
    document.querySelector('div.a').style.display = "none";
    document.querySelector('div.b').style.display = "block";
    setTimeout(function(){location.href="GameDi_main.html"},300);
}

var edit = function(){
    var inputList = document.querySelectorAll('input')
    for(var i=0; i<inputList.length; i++){
        document.getElementsByTagName('input')[i].style.display="block";
    }
}

var save = function(){
    var inputList = document.querySelectorAll('input')
    for(var i=0; i<inputList.length; i++){
        document.getElementsByTagName('input')[i].style.display="none";
    }
}

var chk = function(){
    var chb = document.getElementsByTagName('input');
     if(chb[0].checked){
        document.getElementById('1').style.color = "gray";
        if(i == 1){
            document.getElementById('1').style.display = "none";
        }
     }else{
        document.getElementById('1').style.display = "block";
     }
}

// var Action = function(){ 
//     document.querySelector('div.Game-main').style.display="none";
//     document.querySelector('div.Game-Action').style.display="block";
// }











// function selectDelRow() {
//     var chk = document.getElementsByName("del_unit[]"); // 체크박스객체를 담는다
//     var len = chk.length;    //체크박스의 전체 개수
//     var checkRow = '';      //체크된 체크박스의 value를 담기위한 변수
//     var checkCnt = 0;        //체크된 체크박스의 개수
//     var checkLast = '';      //체크된 체크박스 중 마지막 체크박스의 인덱스를 담기위한 변수
//     var rowid = '';             //체크된 체크박스의 모든 value 값을 담는다
//     var cnt = 0;                 
    
//     for(var i=0; i<len; i++){
//         if(chk[i].checked == true){
//             checkCnt++;        //체크된 체크박스의 개수
//             checkLast = i;     //체크된 체크박스의 인덱스
//         }
//     } 
    
//     for(var i=0; i<len; i++){
//         if(chk[i].checked == true){  //체크가 되어있는 값 구분
//             checkRow = chk[i].value;
//             if(checkCnt == 1){                            //체크된 체크박스의 개수가 한 개 일때,
//                 rowid += "'"+checkRow+"'";        //'value'의 형태 (뒤에 ,(콤마)가 붙지않게)
//             }
//             else{                                            //체크된 체크박스의 개수가 여러 개 일때,
//                 if(i == checkLast){                     //체크된 체크박스 중 마지막 체크박스일 때,
//                     rowid += "'"+checkRow+"'";  //'value'의 형태 (뒤에 ,(콤마)가 붙지않게)
//                 }
//                 else{
//                     rowid += "'"+checkRow+"',";	 //'value',의 형태 (뒤에 ,(콤마)가 붙게)
//                 }
//             }
//             cnt++;
//             checkRow = '';    //checkRow초기화.
//         }
//         alert(rowid);    //'value1', 'value2', 'value3' 의 형태로 출력된다.
//     }
// }
// var MenuList = ["Sports", "Racing", "Indie", "Simulation", "Strategy" ]
// var add = function() {
//     var name = prompt('Menu Name','');
//     var plusUl = document.createElement('li');
//     plusUl.innerHTML 
//     = "<a href="+name+".html"+"id=i"+">"+name+"</a>"
//     if(!name == '') {
//         document.getElementById('MENU-add').appendChild(plusUl);
//     }
// }