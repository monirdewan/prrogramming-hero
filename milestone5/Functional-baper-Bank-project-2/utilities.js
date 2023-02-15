function getInputValueById(inputId){
    const inputFeild = document.getElementById(inputId);
    const inputFealdValueString = inputFeild.value;
    inputFeild.value = '';
    const inputFeildValue = parseFloat(inputFealdValueString);
    return inputFeildValue;
}


function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
