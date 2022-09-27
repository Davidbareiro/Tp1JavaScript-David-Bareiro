

// const nameValue = document.getElementById("usuario").value;




const element = document.getElementById("enviar");
element.addEventListener("click", ingresar);

function fncEntrar() {
 
    alert ("Bienvenido al sitio de prestamos !");
    // location.href = "cuentas.html";
}


let Clave = "enzo";
let contador = 1 ;
let pasar = false;

function ingresar(e) {
 //for (let i = 2; i >=0 ; i--) {

    e.preventDefault();
    
    const miClave = document.getElementById("clave").value;

    if (miClave === Clave){
        alert ("Bienvenido al sitio de prestamos !");
         location.href = "cuentas.html";
        pasar = true;
    }
    else {
        alert ("Password erroneo");
        contador = contador + 1;
    }
 //} 
 return pasar;
}
  

if (ingresar() == true) {


}