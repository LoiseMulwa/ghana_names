let validate=document.getElementById("validate");
let born=document.forms["validate"]["born"];
let month=document.forms["validate"]["month"];
let year=document.forms["validate"]["year"];

function myLogin(){
    if(born.value.length=="" || month.value.length=="" || year.value.length==""){
        document.getElementById("validate").innerHTML="PLEASE FILL OUT ALL FIELDS!!"
        // alert("Please fill out all fields");
        return false;


    }
}

let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var namesFemale=["Akosua","Abenaa","Akua","Yaa","Afua","Ama"];
var namesMale=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kwame"];

function calculate(){
    let DD= parseInt(document.getElementById("born").value);
    let MM = parseInt(document.getElementById("month").value);
    let year = document.getElementById("year").value;

    let cut=year.split('');
    
    c1 =cut[0];
    c2=cut[1];
    CC = parseInt(c1+c2);
    // alert(CC);
    y1=cut[2];
    y2=cut[3]
    YY = parseInt(y1+y2);
    // alert(YY);
    
    let d = Math.floor( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    
    alert(d);
     }

     document.getElementById("gender");

if (gender=="male"){
    let i=0;
    for(i; i<=6; i++){
        if(i==Math.floor(d));
        alert("Your akan name is"+namesMale[i])


    }
}






    









