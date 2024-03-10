
/*
**********************************************************************************************************************************************************************************
REQUERIMIENTO TRES
**********************************************************************************************************************************************************************************
*/
let opt_1  = document.getElementById("opt1");
let opt_2 = document.getElementById("opt2");
let opt_3 = document.getElementById("opt3");
var msn2 = document.querySelector("#msn");
var clave = "";

function validaPass(){
    clave = opt_1.value + opt_2.value + opt_3.value
    if(clave == "911"){ 
         msn2.innerHTML = "Password 1 correcto"
    }else if(clave == "714"){
        msn2.innerHTML = "Password 2 correcto"
    }else{
        msn2.innerHTML = "Password Incorrecto"
    }
}
/*
**********************************************************************************************************************************************************************************
*/