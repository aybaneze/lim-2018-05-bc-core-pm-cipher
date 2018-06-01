
const clearE=document.getElementById('clearE');
const btnEncode=document.getElementById('cifrar');
const btnDecode=document.getElementById('descifrar');
const goes=document.getElementById("btnGO");


goes.addEventListener('click', ()=> {
let name = document.getElementById('name').value;
document.getElementById('AnswerName').innerHTML="Welcome "+name.toUpperCase();

 document.getElementById("form").style.display="block";
 document.getElementById("welcome").style.display="none";
});


btnEncode.addEventListener('click', () => {
    let string= document.getElementById("string").value;
    let offset = parseInt(document.getElementById("offset").value);
    let respuesta= document.getElementById("respuesta");
    respuesta.value=window.cipher.encode(offset,string)

});


btnDecode.addEventListener('click', ()=>{
    let string = document.getElementById("string").value.toUpperCase();
    let offset = parseInt(document.getElementById("offset").value);
    let respuesta= document.getElementById("respuesta");
    respuesta.value=window.cipher.decode(offset,string)
});


clearE.addEventListener('click', ()=> {
    document.getElementById("string").value="";
    document.getElementById('offset').value="";
    document.getElementById('respuesta').value="";
  });