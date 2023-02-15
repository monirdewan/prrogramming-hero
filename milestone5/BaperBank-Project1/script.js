document.getElementById('btn-deposit').addEventListener('click',function(){
    //deposit input feild
    const depositAmount = document.getElementById('deposit-feild');
    const newDepositString = depositAmount.value;
    const newDepositNumber = parseFloat(newDepositString);
    depositAmount.value = '';

        //deposit blance feild
    const depositBlance = document.getElementById('deposit-total');
    const depositeBlanceString= depositBlance.innerText;
    const depositeBlanceNumber = parseFloat(depositeBlanceString);
    const depositTotal = newDepositNumber+depositeBlanceNumber;
    depositBlance.innerText = depositTotal;

    //total blance feild

    const totalBlance = document.getElementById('deposit-blance');
    const totalBlanceString = totalBlance.innerText;
    const totalBlanceNumber = parseFloat(totalBlanceString);
    const totalBlanceAdd = newDepositNumber+totalBlanceNumber;
    totalBlance.innerText = totalBlanceAdd;

})


document.getElementById('btn-withdrow').addEventListener('click',function(){
    //Withdrow input Feild
    const withdrowAmmount = document.getElementById('withdrow-feild');
    const withdrowAmmountStr = withdrowAmmount.value;
    const withdrowAmmountNum = parseFloat(withdrowAmmountStr);
    
    withdrowAmmount.value = '';

    //Withdrow Blance
    const totalWithdrowBlance = document.getElementById('withdrow-total');
    const totalWithdrowBlanceStr = totalWithdrowBlance.innerText;
    const totalWithdrowBlanceNum = parseFloat(totalWithdrowBlanceStr);
    const newlWithdrowBlance = totalWithdrowBlanceNum + withdrowAmmountNum;
    totalWithdrowBlance.innerText = newlWithdrowBlance;


    //Total Blance
     //total blance feild

     const totalBlance = document.getElementById('deposit-blance');
     const totalBlanceString = totalBlance.innerText;
     const totalBlanceNumber = parseFloat(totalBlanceString);
     const totalBlanceSub = totalBlanceNumber-withdrowAmmountNum;
     totalBlance.innerText = totalBlanceSub;
})