    const passBox = document.getElementById("password");
    const lenght = 12;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const loweeCase = "abcdefghijklmnopqrstuvwxyz";
    const Numbers = "1234567890";
    const Symbols = "!@#$%^&*()_;,.?/";

    const allChars =  upperCase + loweeCase + Numbers + Symbols;

    function createPassword(){

      let password = " ";

      password += upperCase[Math.floor(Math.random() *upperCase.length)];
      password += loweeCase[Math.floor(Math.random() *loweeCase.length)];
      password +=Numbers[Math.floor(Math.random() *Numbers.length)];
      password += Symbols[Math.floor(Math.random() *Symbols.length)];
    
        for(let i=password.length; i<lenght;i++){
         password += allChars[Math.floor(Math.random() *allChars.length)];
      } 
    passBox.value =  password;    
               }

   function copypassword(){
             passBox.select();
             document.execCommand("copy"); 

         }
      
   
   

         



       


    