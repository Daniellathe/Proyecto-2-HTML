
var cuentas = { 
    nombre1: "Mali";
    saldo: 200;
    password:"helloworld";

    nombre2: "Gera";
    saldo: 290;
    password:"133t";
    
    nombre3: "Maui";
    saldo: 67;
    password:"123";
}

/*let consultarSaldo = 

const Saldo ={
    cuenta: (990 , 10),
}*/

function login(form){
    if (form.u.value=="Mali") {
        if(form.c.value=="helloworld") {
            location=("bienvenido.html");
        } else {
            alert("error de password");
        }
    }else{
        alert("error de usuario");
    }
    if (form.u.value=="Gera") {
        if(form.c.value=="133t") {
            location=("bienvenido.html");
        } else {
            alert("error de password");
        }
    }else{
        alert("error de usuario");
    }
    if (form.u.value=="Maui") {
        if(form.c.value=="123") {
            location=("bienvenido.html");
        } else {
            alert("error de password");
        }
    }else{
        alert("error de usuario");
    }
}

