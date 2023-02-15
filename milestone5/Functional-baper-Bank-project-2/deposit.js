




document.getElementById('btn-deposit').addEventListener('click',function(){
   //New deposite Amount get
const newDipositAmount = getInputValueById('deposit-feild');


//Get Previous Deposite Amount
const previouDepositTotal = getElementValueById('deposit-total')

//calculate new deposite total
const newDepositeTotal = previouDepositTotal+newDipositAmount;
//previous total blance
const preBlanceTotal = getElementValueById('deposit-blance');
const newBlanceTotal = preBlanceTotal+newDipositAmount;
//deposit total value

setTextElementValueById('deposit-total', newDepositeTotal);
setTextElementValueById('deposit-blance', newBlanceTotal);
})


