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