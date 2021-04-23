describe('Testes basicos', () => {
   //descrição do caso de testes
   test('Soma 2 numeros', async () => {
      var a =10;
      var b =15
      var c = a+b
      expect(c).toEqual(25);
   
   });

   test('subtrair 2 numeros', async () => {
      var a =20;
      var b =15
      var c = a-b
      expect(c).toEqual(5);
   
   });

 
})