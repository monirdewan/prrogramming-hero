
function updatePhoneNumber (isIncrease){
    const phoneCount = document.getElementById('phone-count-field');
    const phoneCountString = phoneCount.value;
    const phoneCountNumber = parseFloat(phoneCountString);
    let newPhoneCountNumber;
    if(isIncrease){
        newPhoneCountNumber= phoneCountNumber+1;
       
    }else{
        newPhoneCountNumber = phoneCountNumber-1;
       
    }
    phoneCount.value = newPhoneCountNumber;
    return newPhoneCountNumber;
}

function updatePhoneTotalPrice(newPhoneCount){
  const phoneTotalPrice = newPhoneCount*1259;
  const phoneTotalElement = document.getElementById('phone-total-price');
  phoneTotalElement.innerText = phoneTotalPrice;
}




document.getElementById('btn-phone-plus').addEventListener('click',function(){
  const newPhoneCount= updatePhoneNumber(true);
  updatePhoneTotalPrice(newPhoneCount);
  calculateSubTotal();
 
//   const taxTotalField = document.getElementById('tax-amount');
//   const taxTotal = (newSubtotal*1.5)/100;
//   taxTotalField.innerText = taxTotal;
 
})




document.getElementById('btn-phone-minus').addEventListener('click',function(){
   const newPhoneCount = updatePhoneNumber(false);
   updatePhoneTotalPrice(newPhoneCount);
   calculateSubTotal();
   
})


