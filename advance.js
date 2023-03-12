
document.getElementById("demo").innerHTML="Hello world";
document.getElementById("sample").innerHTML="welcome";
let d=document.getElementsByClassName("s1")
d[0].innerHTML="Hello world";

 function validation (){

    let x=document.forms["validf"]["valid"].value;
    if(x =="monisha"){
        alert("welcome to this  page");

    }
    
    
    
 }
const collect= document.getElementsByTagName("li");
document.getElementById("demo1").innerHTML=collect[2].innerHTML;