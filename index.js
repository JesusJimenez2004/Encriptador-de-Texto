// detectamos si tiene activado el BloqMayus
let text = document.getElementById("text");
text.addEventListener("keyup", (event) => {
    if (event.getModifierState("CapsLock")) {
        alert( "Solo puedes ingresar minusculas!")
      location.reload();
    }
  });
  //Bloque de encriptar
function encriptar(){
    let text = document.getElementById("text").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
   let parrafo = document.getElementById("parrafo");
    let dibujo = document.getElementById("dibujo");
    let textCifrado = text
                        .replace(/e/gi,"enter")
                        .replace(/i/gi,"imes")
                        .replace(/a/gi,"ai")
                        .replace(/o/gi,"ober")
                        .replace(/u/gi,"ufat");
                    
   if(text.length !=0){
    document.getElementById("text").value = textCifrado;
    tituloMensaje.textContent = "Texto encriptado con exito";
    parrafo.textContent = "";
    dibujo.src = "./img/encriptado exito.jpg";
    document.getElementById('text').innerHTML = textCifrado; 
       

   }else{
    dibujo.src= "./img/encriptado.jpg";
     tituloMensaje.textContent = "Ningun mensaje fue encontrado"; //comprobamos los campos vacíos
     parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"; 
     swal ( "Oops" ,  "Tienes que ingresar un texto!" ,  "error" )
       
   } 
}
    //Bloque Desencriptar
       function Desencriptar() {
         let text= document.getElementById("text").value;
         let tituloMensaje = document.getElementById("titulo-mensaje");
         let parrafo = document.getElementById("parrafo");
         let dibujo = document.getElementById("dibujo");

            let textCifrado= text
                  .replace(/enter/gi, "e")
                  .replace(/imes/gi,"i")
                  .replace(/ai/gi,"a")
                  .replace(/ober/gi,"o")
                  .replace(/ufat/gi,"u ");
      
   if(text.length !=0){
      document.getElementById("text").value = textCifrado;
    tituloMensaje.textContent = "Texto desencriptado con exito";
    parrafo.textContent = "";
    dibujo.src = "./img/desencriptado.png";
    document.getElementById('text').innerHTML = textCifrado;               
}else{
   dibujo.src= "./img/encriptado.jpg";
   tituloMensaje.textContent = "Ningun mensaje fue encontrado";
   parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"; 
   swal ( "Oops" ,  "Tienes que ingresar un texto!" ,  "error" ) //alertas
      
}
}
//boton de copiar
function copiar(){
   let textoCopiar = document.getElementById("text");
   let copiarAlPortaPapel = async str => {
       try {
           await navigator.clipboard.writeText(str);
           swal ( "Vaya" ,  "Tu texto ha sido copiado!" ,  "success" )
       } catch (error) {
           alert(error);
       }
   };
   copiarAlPortaPapel(textoCopiar.textContent); //portapapeles

   textoCopiar.value = "";

}
