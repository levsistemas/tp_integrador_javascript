var ticket=200;
var cantidadPersonas;
var infoPagar;
var Resultado;
var descuento;
var correoelectronico;
const valorPorDefecto=document.getElementById("calculo").value=`Total a Pagar: $`

function student(){
    document.getElementById('options').value='Estudiante';
    console.log(`Realizamos click sobre el cuadro Estudiante...`);
}
function trainee(){
    document.getElementById('options').value='Trainee';
    console.log(`Realizamos click sobre el cuadro Trainee...`);
}
function junior(){
    document.getElementById('options').value='Juniors';
    console.log(`Realizamos click sobre el cuadro Juniors...`);
}
function cantPersonas(){
    Resultado=0
    cantidadPersonas=parseInt(document.getElementById("cantidad").value)
    if(document.getElementById("cantidad").value !==''){
        if(document.getElementById("options").value=='Estudiante'){
            descuento=parseFloat(`${ticket}`*80/100)
            Resultado=parseFloat(`${ticket}`)-parseFloat(`${ticket}`*80/100);
            Personas();
        }
        if(document.getElementById("options").value=='Trainee'){
            descuento=parseFloat(`${ticket}`*50/100)
            Resultado=parseFloat(`${ticket}`)-parseFloat(`${ticket}`*50/100)
            Personas();
        }
        if(document.getElementById("options").value=='Juniors'){
            descuento=parseFloat(`${ticket}`*15/100)
            Resultado=parseFloat(`${ticket}`)-parseFloat(`${ticket}`*15/100)
            Personas();
        }
    }
}
function Personas(){
    if(cantidadPersonas !==1){
        Resultado=Resultado*cantidadPersonas;
        document.getElementById("calculo").value=`${valorPorDefecto}${Resultado} para ${cantidadPersonas} personas (descuento de $${descuento} por persona)`;
    } else {
        Resultado=Resultado*cantidadPersonas;
        document.getElementById("calculo").value=`${valorPorDefecto}${Resultado} para ${cantidadPersonas} persona (descuento de $${descuento} por persona)`
    }
}
function category(){
    Resultado=0
    document.getElementById("calculo").value=`${valorPorDefecto}`;
}
function Resultados(){
    cantPersonas();
    if(document.getElementById('name').value==''){
        alert(`El campo nombre no puede estar vacio`);
    }
    if(document.getElementById('surname').value==''){
        alert(`El campo apellido no puede estar vacio`)
    }
    if(document.getElementById('e-mail').value==''){
        alert(`El campo correo no puede estar vacio`)
    } else {
        correoelectronico=document.getElementById('e-mail').value
        var elarroba;
        elarroba=correoelectronico.indexOf('@',0);
        elarroba=++elarroba;
        if (elarroba == 0) {
            alert(`No se encuentra el símbolo de arroba, verificar direccion de correo en el campo Correo: ${correoelectronico}`);
        }
    }
}
function Borrar(){
    if(document.getElementById('name').innerText!==''){
        document.getElementById('name').innerText=''
    }
    if(document.getElementById('surname').innerText!==''){
        document.getElementById('surname').innerText=''
    }
    if(document.getElementById('e-mail').innerText!==''){
        document.getElementById('e-mail').innerText=''
    }
    if(document.getElementById('cantidad').innerText!==''){
        document.getElementById('cantidad').innerText=''
    }
    if(document.getElementById('calculo').value!==`${valorPorDefecto}`){
        document.getElementById('calculo').value=`${valorPorDefecto}`
    }
}