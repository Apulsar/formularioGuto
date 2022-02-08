function valorator(){
var sliderValue=document.getElementById('Valoracion').value
alert("Has valorado con "+sliderValue+" puntos")
}
document.querySelector("#Valoration").addEventListener("click",valorator);

function bankAccount(){
    var IBAN =document.getElementById('IBAN').value
    var Entidad =document.getElementById('Entidad').value
    var Sucursal =document.getElementById('Sucursal').value
    var DC =document.getElementById('DC').value
    var Cuenta =document.getElementById('Cuenta').value
    if(IBAN==""||Entidad==""||Sucursal==""||DC==""||Cuenta==""){
        alert("Por favor rellene todos los campos indicados para poder ver su número de cuenta")
    }else if(IBAN.length!=2||Entidad.length!=4||Sucursal.length!=4||DC.length!=2||Cuenta.length!=10){
        alert("Por favor rellene los campos de acuerdo al patrón indicado para poder ver su numero de cuenta")
    }else{
    alert("Le informamos que su cuenta bancaria es ES"+IBAN+"-"+Entidad+"-"+Sucursal+"-"+DC+"-"+Cuenta)
    }
}
document.querySelector("#Account").addEventListener("click",bankAccount);