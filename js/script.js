

// function myLogin(){
//     if(born.value.length=="" || month.value.length=="" || year.value.length==""){
//         document.getElementById("validate").innerHTML="PLEASE FILL OUT ALL FIELDS!!"
//         // alert("Please fill out all fields");
//         return false;
//     }
// }



function calculate(){
// let validate=document.getElementById("validate");
// let born=document.forms["validate"]["born"];
// let month=document.forms["validate"]["month"];
// var year=document.forms["validate"]["year"];

// if(born.value.length=="" || month.value.length=="" || year.value.length==""){
//     document.getElementById("validate").innerHTML="PLEASE FILL OUT ALL FIELDS!!"
//     // alert("Please fill out all fields");
//     return false;
// }


let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var female=["Akosua","Abenaa","Akua","Yaa","Afua","Ama"];
var male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kwame"];
    let DD= parseInt(document.getElementById("born").value);
    let MM = parseInt(document.getElementById("month").value);
    let year = document.getElementById("year").value;
    // let date=document.getElementById("validate").value;



    let cut=year.split('');
    
    c1 =cut[0];
    c2=cut[1];
    CC = parseInt(c1+c2);

    // alert(CC);
    y1=cut[2];
    y2=cut[3]
    YY = parseInt(y1+y2);
    // alert(YY);
    
    let d = Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7 );
    // alert(d);
    // man=document.getElementById("male").value;
    // alert(male[d]);

    // ourGender(d, date)
    
    // alert(d);

    var gender = document.getElementById("gender").value;
    // console.log(gender);
    if (gender === "male"){
    sex=male;
    }
    else{
    sex=female;
    }
    alert(sex[d]);
};
     


    //  alert(gender)
    //  alert(d)
     

// document.getElementById("gender").innerHTML =gender;
    
    

// function ourGender(day, date){ 
// let gender = document.getElementById("gender").value;
// let akanName
// let day
//     //  alert(gender.value);
//     //  alert(d);
     
//      if(gender=="male"){
//          akanName=namesMale[day]
//          day=days[day]
        
//          alert("Your Akan name is " + akanName);
//          // document.getElementById("row").display="none";
//      }
//      else if(gender =="female"){
//         akanName=namesFemale[day]
//         day=days[day]
//          alert("Your Akan Name is " + akanName);
//          // document.getElementById("row").display="none";
 
//      }


