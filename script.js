function encriptar() {
    var textLeft = document.getElementById("inputTextLeft").value.toLowerCase();
    var textCifrado = textLeft.replace(/e/igm, "enter");
    var textCifrado = textCifrado.replace(/o/igm, "ober");
    var textCifrado = textCifrado.replace(/i/igm, "imes");
    var textCifrado = textCifrado.replace(/a/igm, "ai");
    var textCifrado = textCifrado.replace(/u/igm, "ufat");

    document.getElementById("imgBoy").style.display = "none";
    document.getElementById("not-found-text").style.display = "none";
    document.getElementById("inputTextRight").innerHTML = textCifrado;
    document.getElementById("btnCopiar").style.display  = "show";
    document.getElementById("btnCopiar").style.display  = "inherit";
    document.getElementById("inputTextLeft").value = "";
};

function desencriptar() {
    var textLeft = document.getElementById("inputTextLeft").value.toLowerCase();
    var textCifrado = textLeft.replace(/enter/igm, "e");
    var textCifrado = textCifrado.replace(/ober/igm, "o");
    var textCifrado = textCifrado.replace(/imes/igm, "i");
    var textCifrado = textCifrado.replace(/ai/igm, "a");
    var textCifrado = textCifrado.replace(/ufat/igm, "u");

    document.getElementById("imgBoy").style.display = "none";
    document.getElementById("not-found-text").style.display = "none";
    document.getElementById("inputTextRight").innerHTML = textCifrado;
    document.getElementById("btnCopiar").style.display  = "show";
    document.getElementById("btnCopiar").style.display  = "inherit";
};

function copiar(){
    var contenido = document.querySelector("#inputTextRight");
    contenido.select();
    document.execCommand("copy");
    alert("¡Texto copiado exitosamente!"); 
}

function activarOscuro() {
    var styleSheet = document.getElementById("styleSheet");
  
    if (styleSheet.getAttribute("href") === "style.css") {
      styleSheet.setAttribute("href", "styleDark.css");
    } else {
      styleSheet.setAttribute("href", "style.css");
    }
  }

  function verificarTexto() {
    var texto = document.getElementById("inputTextLeft").value;
  
    var contieneCaracteresEspeciales = /[!@#$%^&*(),.?":{}|<>]/.test(texto);
    var contieneMayusculas = /[A-Z]/.test(texto);
  
    if (contieneCaracteresEspeciales || contieneMayusculas) {
      alert("El texto no debe contener caracteres especiales ni letras mayúsculas.");
    } else {
      encriptar();
    }
  }
  
  