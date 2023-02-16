
//Case Plus Event
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const preCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if(isIncrease===true){
        newCaseNumber = preCaseNumber+1;
    }else{
        newCaseNumber = preCaseNumber-1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotlPrice = newCaseNumber*59;
    const productPrice = document.getElementById('product-price');
    productPrice.innerText = caseTotlPrice;
}


document.getElementById('btn-case-plus').addEventListener('click',function(){
  const newCaseNumber = updateCaseNumber(true);
 updateCaseTotalPrice(newCaseNumber);
 calculateSubTotal();

   //Product Price Element
//    const productPrice = document.getElementById('product-price');
//    const productPriceString = productPrice.innerText;
//    const preProductAmount = parseFloat(productPriceString);
//    const singleProductPrice = preProductAmount/preCaseNumber;
//    const newProductPrice = singleProductPrice+preProductAmount;
//    productPrice.innerText = newProductPrice;
   
})


//Case Minus Event

document.getElementById('btn-case-minus').addEventListener('click',function(){
   const newCaseNumber = updateCaseNumber(false);
   updateCaseTotalPrice(newCaseNumber);
   calculateSubTotal();

    //Subtract Product Price
//     const productPrice = document.getElementById('product-price');
//    const productPriceString = productPrice.innerText;
//    const preProductAmount = parseFloat(productPriceString);
//    const singleProductPrice = preProductAmount/preCaseNumber;
//    const newProductPrice = preProductAmount-singleProductPrice;
//    productPrice.innerText = newProductPrice;
})

