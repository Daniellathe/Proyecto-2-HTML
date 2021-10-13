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

function Saludar() {
    alert("Hola DevF");
}

//*function Saludar() {
//    alert("Hola DevF");
//}