function validator(){
    let nombre=document.querySelector("#nombre").value;
    let apellido=document.querySelector("#apellido").value;
    let pass1=document.querySelector("#pass1").value;
    let pass2=document.querySelector("#pass2").value;
    document.querySelector("#E0").innerHTML="";
    document.querySelector("#E1").innerHTML="";
    document.querySelector("#E2").innerHTML="";

    try{
    if (nombre.length<3){
        throw "E0";
    }
    if(apellido==null){
        throw "E1";
    }
    if(pass1!=pass2){
        throw "E2";
    }
}
    catch(e){
        switch(e){
        case "E0":
        return document.querySelector("#E0").innerHTML+="El nombre tiene que tener al menos 3 caracteres. ";
        
        case "E1":
        return  document.querySelector("#E1").innerHTML+=("El apellido no puede estar vacío. ");
        
        case "E2":
        return document.querySelector("#E2").innerHTML+=("Las dos contraseñas no coinciden. ");    }
        
    }

}
document.querySelector("#submit").addEventListener("click",validator);