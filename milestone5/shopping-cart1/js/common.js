//calculate total
//Get Text Element by Id
function getTextElementById(elementId){
    const phoneTotalElement =  document.getElementById(elementId);
    const currentPhoneTotalStr = phoneTotalElement.innerText;
    const currentPhoneTotalNum = parseInt(currentPhoneTotalStr);
    return currentPhoneTotalNum;
    }
    
    function setTextElementValueById(elementId, value){
        const currentSubTotal =document.getElementById(elementId);
        currentSubTotal.innerText = value;
    }
    
    //calculate SubTotal
    function calculateSubTotal(){
        const currentPhoneTotal = getTextElementById('phone-total-price');
        const currentCaseTotal = getTextElementById('product-price');
       
        const newSubtotal  = currentPhoneTotal+currentCaseTotal;
        setTextElementValueById('sub-total', newSubtotal)
       

        //calculate tax
        const taxAmountString = (newSubtotal*0.1).toFixed(2);
        const taxAmount = parseFloat(taxAmountString);
       
        setTextElementValueById('tax-amount', taxAmount);

        const finalAmount = newSubtotal+taxAmount;
        setTextElementValueById('final-ammount', finalAmount)

    }
    