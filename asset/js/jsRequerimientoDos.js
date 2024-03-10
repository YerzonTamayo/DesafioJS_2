/*
**********************************************************************************************************************************************************************************
REQUERIMIENTO DOS
**********************************************************************************************************************************************************************************
*/
let caja_1  = document.getElementById("caja1");
let caja_2 = document.getElementById("caja2");
let caja_3 = document.getElementById("caja3");
var msn = document.querySelector("#mensaje");

function sumar(){

    if(caja_1.value > 0 && caja_2.value > 0 && caja_3.value > 0){
        var resultado = Number.parseInt(caja_1.value) + Number.parseInt(caja_2.value) + Number.parseInt(caja_3.value);
        if (resultado > 10){
            msn.innerHTML = "LLevas demasiados Sticker"
        
        }else{
            msn.innerHTML = resultado
        }
    }else{
       alert("Hay un campo vacio debes elegir un Sticket")
    }
}
/*
**********************************************************************************************************************************************************************************
*/