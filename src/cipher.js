

const encriptar = (offset, string) => {
    let textCipher = "";
    for (let i = 0; i < string.length; i++) {
        let pos = string.charCodeAt(i);
        if (pos >= 65 && pos <= 90) {
          textCipher += String.fromCharCode((pos - 65 + offset) % 26 + 65);

        }
        else if (pos>=97 && pos<=122){       
          textCipher += String.fromCharCode((pos-97+offset)%26+97); 

          }
        else {
          textCipher += String.fromCharCode(pos);
        }

    }
    return textCipher
}


const desencriptar = (offset, string) => {

    let textCipherD = "";

    for (let i = 0; i < string.length; i++) {
        let pos = string.charCodeAt(i);

        if (pos >= 65 && pos <= 90) {
            textCipherD += String.fromCharCode((pos + 65 - offset) % 26 + 65);
        }


        else{
          textCipherD += String.fromCharCode(pos);
        }
    }
    return textCipherD

}



window.cipher = {
    encode: encriptar,
    decode: desencriptar,  
    createCipherWithOffset: (offset)=>{
       // const nuevo =
        //{
        //encode: (string)=>{encriptar},
        //decode: (string)=>{desencriptar}
        //}
      return offset;
    } 
     }

