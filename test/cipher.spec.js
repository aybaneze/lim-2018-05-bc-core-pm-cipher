describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });
});


describe('cipher.encode', () => {

  it('debería ser una función', () => {
    assert.equal(typeof cipher.encode, 'function');
  });

  it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
    assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");

  });

 
});



describe('cipher.decode', () => {

  it('debería ser una función', () => {
    assert.equal(typeof cipher.decode, 'function');
  });

  it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
    assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  
  });
   
  it('debería retornar "?" para "?" con offset 1', () => {
    assert.equal(cipher.decode(1,"?"),"?");
  });

});


describe('cipher.encode', () => {

  it('debería retornar "def" para "abc" con offset 3', () => {
    assert.equal(cipher.encode(3,"abc"),"def");
  });

  it('debería retornar "2" para "2" con offset 2', () => {
    assert.equal(cipher.encode(2,"2"),"2");
  });

});




describe('cipher.createCipherWithOffset', () => {

  it('debería ser una función', () => {
    assert.equal(typeof cipher.createCipherWithOffset, 'function');
  });

 it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () =>{
  assert.equal(cipher.createCipherWithOffset(3).encode('a'),'d');
  assert.equal(cipher.createCipherWithOffset(3).decode('D'),'A');
 }); 
});
