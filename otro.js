




function fncEntrar() {

  console.log (pedido);
  console.log (deuda);
 
  if (parseFloat(pedido)>= deuda)  {
    alert("No es posible solicitar mas de la deuda actual");
  }
  else 
    if(parseFloat(pedido)< deuda)  {
      alert("Es posible entregarle mas dinero");
  }
    

}


const element = document.getElementById("btnsolicitar");
element.addEventListener("click", fncEntrar);

const pedido = document.getElementById("pedido").value;
const deuda = document.getElementById("deuda").value;