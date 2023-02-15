



document.getElementById('btn-withdrow').addEventListener('click',function(){
    const newWithdrowAmount = getInputValueById('withdrow-feild');
    const preWithdrowBlance = getElementValueById('withdrow-total');
    const preBlanceTotal = getElementValueById('deposit-blance');
    console.log(preWithdrowBlance);

    const newWithdrowBlance = newWithdrowAmount+preWithdrowBlance;
    const newBlanceTotal = preBlanceTotal-newWithdrowAmount;

    setTextElementValueById('withdrow-total', newWithdrowBlance);
    setTextElementValueById('deposit-blance', newBlanceTotal);

})