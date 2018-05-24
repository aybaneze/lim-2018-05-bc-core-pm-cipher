
const Fname = () => {
  let name = document.getElementById('name').value;
  document.getElementById('AnswerName').value="BIENVENIDA!!! "+name;
 }
 
 const encriptar = () => {
     let texto = document.getElementById("cifrado").value;
     let offset1 = parseInt(document.getElementById("offset1").value);
     let textoCifrado="";
     for (let i = 0; i < texto.length;i++) {
         textoCifrado += String.fromCharCode((texto.toUpperCase().charCodeAt(i)-65+offset1)%26+65);
     }
     document.getElementById("respuesta").value = textoCifrado;
 }
 
 const clearEncode =()=> {
   document.getElementById('cifrado').value="";
   document.getElementById('offset1').value="";
   document.getElementById('respuesta').value="";
 }
 

 const desencriptar =() => {
    let textoD = document.getElementById("respuesta").value;
    let offset1 = parseInt(document.getElementById("offset1").value);
    let textoCifradoD = "";
    for (var i = 0; i < textoD.length;i++) {
        textoCifradoD += String.fromCharCode((textoD.toUpperCase().charCodeAt(i)+65-offset1)%26+65);
    }
    document.getElementById("respuesta").value = textoCifradoD;

    
 }

window.cipher = {
  encode: encriptar,
  decode: desencriptar,

};
