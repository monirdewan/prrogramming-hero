
function getPin(){
   const pin = generatePin();
   const pinString = pin+'';
   if(pinString.length === 4){
      return pin;
   }else{
     
      return getPin();
   }
}


function generatePin(){
   const random =  Math.round(Math.random()*10000);
   return random;
}


document.getElementById('generat-pin').addEventListener('click', function(){
   const pin = getPin();
   const pinDisplay = document.getElementById('display-pin');
   pinDisplay.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
   const inputNum = event.target.innerText;
   const displayNum = document.getElementById('display-num');;
   const previousTypeNumber = displayNum.value;
   if(isNaN(inputNum)){
      if(inputNum==='C'){
         displayNum.value = '';
      }else if(inputNum === '<'){
        const digit = previousTypeNumber.split('');
        digit.pop();
        const remainingDigits = digit.join('');
        displayNum.value = remainingDigits;
      }
   }else{
     
     
      const newDisplayNum = previousTypeNumber+inputNum
      displayNum.value = newDisplayNum;
   }
 
})



document.getElementById('verify-pin').addEventListener('click',function(){
  const displayPinField = document.getElementById('display-pin');
  const currentPin = displayPinField.value;
  const typeNumberField = document.getElementById('display-num');
  const currentTypeNumber = typeNumberField.value;
  const pinSuccessMessage = document.getElementById('pin-success');
  const pinIncorrect = document.getElementById('pin-incorrect');
  if(currentTypeNumber == currentPin){
  
   pinSuccessMessage.style.display='block';
   pinIncorrect.style.display = 'none';
  }else{
  
   pinIncorrect.style.display = 'block';
   pinSuccessMessage.style.display='none';
  }
})