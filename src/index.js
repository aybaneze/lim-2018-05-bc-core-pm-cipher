
let name = document.getElementById('name');
const btnName =document.getElementById('btnName');
const cifrar=document.getElementById('cifrar');
const descifrar=document.getElementById('descifrar');

name.addEventListener('input', () => {
  console.log(name.value)
});

btnName.addEventListener('click', Fname);


cifrado.addEventListener('input', () => {
    console.log(cifrado.value);
 })

offset1.addEventListener('input', () => {
    console.log(offset1.value);
})
cifrar.addEventListener('click', window.cipher.encode) ;

clearE.addEventListener('click', clearEncode);


descifrar.addEventListener('click', window.cipher.decode);

