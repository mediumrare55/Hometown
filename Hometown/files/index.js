document.addEventListener("click",checkForm);

function checkForm(){
    let passw=document.getElementById("AGE").value;
    if (passw=="Omsk"||passw=="omsk"||passw=="OMSK"){
        document.getElementById("ww").style.opacity="100%";

    } else if (passw==""){
        document.getElementById("www").innerHTML="";
    }
    else{
        document.getElementById("www").innerHTML="Nono";
    }
}