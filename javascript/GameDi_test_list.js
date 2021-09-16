var list1 = ['메인','액션','스포츠','레이싱','인디','시뮬레이션']
var list2 = ['main','Action','Sports','Racing','Indi','Simulation']

var MenuBarList = function(){
    for(var i=0; i<list1.length; i++){
        document.write('<li onclick="Select(this)" id="'+list2[i]+'">'+list1[i]+'</li>');
        // document.write('<li onclick="'+list2[i]+'()">'+list1[i]+'</li>');
    }
}


var Select = function(self){
    for(var i=0; i<list2.length; i++){
        var GET = document.getElementById(self.getAttribute('id')).getAttribute('id');
        if(GET==='Action'){
            document.querySelector('div.Game-'+list2[0]).style.display="none";
            document.querySelector('div.Game-'+list2[1]).style.display="block";
        }
        else{document.querySelector('div.Game-'+list2[1]).style.display="none";}

        if(GET==='Sports'){
            document.querySelector('div.Game-'+list2[0]).style.display="none";
            document.querySelector('div.Game-'+list2[2]).style.display="block";
        }
        else{document.querySelector('div.Game-'+list2[2]).style.display="none";}

        if(GET==='Racing'){
            document.querySelector('div.Game-'+list2[0]).style.display="none";
            document.querySelector('div.Game-'+list2[3]).style.display="block";
        }
        else{document.querySelector('div.Game-'+list2[3]).style.display="none";}

        if(GET==='Indi'){
            document.querySelector('div.Game-'+list2[0]).style.display="none";
            document.querySelector('div.Game-'+list2[4]).style.display="block";
        }
        else{document.querySelector('div.Game-'+list2[4]).style.display="none";}

        if(GET==='Simulation'){
            document.querySelector('div.Game-'+list2[0]).style.display="none";
            document.querySelector('div.Game-'+list2[5]).style.display="block";
        }
        else{document.querySelector('div.Game-'+list2[5]).style.display="none";
        }
    }
}

// var list3=['div.Game-main','div.Game-Action','div.Game-Racing','div.Game-Indi','div.Game-Simulation']
// var clk = document.querySelector(list3[i]).style.display="block";
// for(var i=0; i<list3.length; i++){
//     document.write(clk);
// }

// var List = function(self){
//     var list3=['div.Game-main','div.Game-Action','div.Game-Sports','div.Game-Racing','div.Game-Indi','div.Game-Simulation']
//     for(var i=0; i<list3.length; i++){
//         document.querySelector(list3[i]).style.display="block";
//     }
//     // document.querySelector().style.display="none";
// }

// var Select = function(self){
//     var GET = document.getElementById(self.getAttribute('id')).getAttribute('id');
//     if(GET==='Action'){
//         document.querySelector('div.Game-Action').style.display="block";
//     }
//     else if(GET==='Sports'){
//         document.querySelector('div.Game-Sports').style.display="block";
//     }
//     else if(GET==='Racing'){
//         document.querySelector('div.Game-Racing').style.display="block";
//     }
//     else if(GET==='Indi'){
//         document.querySelector('div.Game-Indi').style.display="block";
//     }
//     else if(GET==='Simulation'){
//         document.querySelector('div.Game-Simulation').style.display="block";
//     }
//     else{document.querySelector('div.Game-main').style.display="block";
//     }
//     console.log(GET);
// }

// var Action = function(){
//     document.querySelector('div.Game-main').style.display="none";
//     document.querySelector('div.Game-Action').style.display="block";
//     document.querySelector('div.Game-Sports').style.display="none";
//     document.querySelector('div.Game-Racing').style.display="none";
//     document.querySelector('div.Game-Indi').style.display="none";
//     document.querySelector('div.Game-Simulation').style.display="none";
// }

// var Sports = function(){
//     document.querySelector('div.Game-main').style.display="none";
//     document.querySelector('div.Game-Action').style.display="none";
//     document.querySelector('div.Game-Sports').style.display="block";
//     document.querySelector('div.Game-Racing').style.display="none";
//     document.querySelector('div.Game-Indi').style.display="none";
//     document.querySelector('div.Game-Simulation').style.display="none";
// }

// var Racing = function(){
//     document.querySelector('div.Game-main').style.display="none";
//     document.querySelector('div.Game-Action').style.display="none";
//     document.querySelector('div.Game-Sports').style.display="none";
//     document.querySelector('div.Game-Racing').style.display="block";
//     document.querySelector('div.Game-Indi').style.display="none";
//     document.querySelector('div.Game-Simulation').style.display="none";
// }

// var Indi = function(){
//     document.querySelector('div.Game-main').style.display="none";
//     document.querySelector('div.Game-Action').style.display="none";
//     document.querySelector('div.Game-Sports').style.display="none";
//     document.querySelector('div.Game-Racing').style.display="none";
//     document.querySelector('div.Game-Indi').style.display="block";
//     document.querySelector('div.Game-Simulation').style.display="none";
// }

// var Simulation = function(){
//     document.querySelector('div.Game-main').style.display="none";
//     document.querySelector('div.Game-Action').style.display="none";
//     document.querySelector('div.Game-Sports').style.display="none";
//     document.querySelector('div.Game-Racing').style.display="none";
//     document.querySelector('div.Game-Indi').style.display="none";
//     document.querySelector('div.Game-Simulation').style.display="block";
// }



// var Select = function(){
//     var list2 = ['Action','Sport','Racing','Indi','Simulation']
//     var list3 = ['Game-main','Game-Action']
//     var slt = document.getElementById("Action");
//     var cnts = document.querySelector(list3[i]);
//     for(var i=0; i<list2.length; i++){
//         cnts.style.display="block";
//         console.log(i)
//         if(slt.clicked == true){
//         }
//     }
// }
