
//Realizamos la funcion para encriptar
const encriptar = (offset, string) => {
    let textCipher = "";
    for (let i = 0; i < string.length; i++) {                                //recorremos la longitud de la palabra ingresada
        let pos = string.charCodeAt(i);
        if (pos >= 65 && pos <= 90) {
          textCipher += String.fromCharCode((pos - 65 + offset) % 26 + 65);  // formula para encriptar letras ASCII-MAYUSCULAS

        }
        else if (pos>=97 && pos<=122){       
          textCipher += String.fromCharCode((pos-97+offset)%26+97);          // formula para encriptar letras ASCII MINUSCULAs

          }
        else {                                                               //si en la condicion el usuario no ingresa alguna de esas dos letras se devolvera la misma letra ingresada
          textCipher += String.fromCharCode(pos);
        }

    }
    return textCipher
}


const desencriptar = (offset, string) => {

    let textCipherD = "";

    for (let i = 0; i < string.length; i++) {                              //recorremos la longitud de la palabra ingresada
        let pos = string.charCodeAt(i);

        if (pos >= 65 && pos <= 90) {
            textCipherD += String.fromCharCode((pos + 65 - offset) % 26 + 65); // formula para desencriptar letras ASCII-MAYUSCULAS

        }


        else{                                                                //si en la condicion el usuario no ingresa alguna de esas dos letras se devolvera la misma letra ingresada
          textCipherD += String.fromCharCode(pos);
        }
    }
    return textCipherD

}


window.cipher = {
    encode: encriptar,
    decode: desencriptar,
    
     }



 
 cipher.createCipherWithOffset= (offset)=>{

    //let  encode= (string)=>{return cipher.encode(string);}
    //let  decode= (string)=>{return cipher.decode(string);};

        return offset
      
    }
