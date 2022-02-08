function valorator() {
    var sliderValue = document.getElementById('Valoracion').value
    alert("Has valorado con " + sliderValue + " puntos")
}
document.querySelector("#Valoration").addEventListener("click", valorator);

function bankAccount() {
    var IBAN = document.getElementById('IBAN').value
    var Entidad = document.getElementById('Entidad').value
    var Sucursal = document.getElementById('Sucursal').value
    var DC = document.getElementById('DC').value
    var Cuenta = document.getElementById('Cuenta').value
    if (IBAN == "" || Entidad == "" || Sucursal == "" || DC == "" || Cuenta == "") {
        alert("Por favor rellene todos los campos indicados para poder ver su número de cuenta")
    } else if (IBAN.length != 2 || Entidad.length != 4 || Sucursal.length != 4 || DC.length != 2 || Cuenta.length != 10) {
        alert("Por favor rellene los campos de acuerdo al patrón indicado para poder ver su numero de cuenta")
    } else {
        alert("Le informamos que su cuenta bancaria es ES" + IBAN + "-" + Entidad + "-" + Sucursal + "-" + DC + "-" + Cuenta)
    }
}
document.querySelector("#Account").addEventListener("click", bankAccount);

function weekday() {
    var weekday = new Date(document.getElementById('Fecha').value)
    var days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    alert("La fecha seleccionada en el elemento fecha es un " + days[weekday.getDay()])
}
document.querySelector("#weekday").addEventListener("click", weekday);

function postalCode() {
    document.getElementById('cpMsg').innerHTML=""
    var postalCode = document.getElementById('CP').value
    var CP = postalCode.split("")
    var Provincia = document.getElementById('Provincia').value
    var Provincias = ['Alava','Albacete','Alicante','Almeria','Avila','Badajoz','Islas Baleares','Barcelona','Burgos','Caceres',
    'Cadiz','Castellon','Ciudad Real','Cordoba','La Corunha','Cuenca','Gerona','Granada','Guadalajara',
    'Guipuzcoa','Huelva','Huesca','Jaen','Leon','Lerida','La Rioja','Lugo','Madrid','Malaga','Murcia','Navarra',
    'Orense','Asturias','Palencia','Las Palmas','Pontevedra','Salamanca','Santa Cruz de Tenerife','Cantabria','Segovia',
    'Sevilla','Soria','Tarragona','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza','Ceuta','Melilla']

    var CPs=[];
    for (var k=1;k<=52;k++){
        var h=k-1;
        if(k<=9){
            k="0"+k
        }
        CPs[h]=`${k}`;
    }

    //Este código hace las validaciones por alerta sobre si el CP está bien escrito y el nombre de la provincia existe

    for (var i = 0; i <= 4; i++) {
        if(CP[i]==null){
            alert("Un código postal está compuesto por cinco números. Revise la información proporcionada por favor.")
            break;
        }

        else if (isNaN(parseInt(CP[i]))) {
            alert("El código postal introducido contiene caracteres no válidos. Revise la información proporcionada por favor.")
            break;
        }
    }
    if(!Provincias.includes(Provincia)){
        alert("La provincia escrita no corresponde con ninguna provincia existente. Revise la información proporcionada por favor.")
    }

    //Este código valida que el código postal se corresponde con la provincia introducida
    if(CPs[Provincias.indexOf(Provincia)]!=postalCode.substring(0,2)){
        document.getElementById('cpMsg').style.color="red"
        document.getElementById('cpMsg').innerHTML="Error en los datos introducidos, la provincia y/o el código postal no son correctos."
    }
    else if(CPs[Provincias.indexOf(Provincia)]==postalCode.substring(0,2)){
        document.getElementById('cpMsg').style.color="green"
        document.getElementById('cpMsg').innerHTML="El código postal y la provincia introducidos son correctos"
    }
}
document.querySelector("#postalCode").addEventListener("click", postalCode);