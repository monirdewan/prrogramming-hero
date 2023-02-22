
//Get Input Value Function
function getInputValue(inputElementId){
    const inputValue = document.getElementById(inputElementId);
    const inputValueString = inputValue.value;
    const inputValueNumber = parseFloat(inputValueString);
    inputValue.value = '';
   
   return inputValueNumber;
    
   
   
}


//Counter
let count = 0;

//Display Value Function
function displayValue(totalValue, geoName){
    //Show data in calculation Area
     //get Name
     const getName = document.getElementById(geoName).innerText;
    const tableRow = document.getElementById('table-data');
    const tr = document.createElement('tr');
    tr.classList.add('trStyle')
    
    count+=1;

    const tableData = tr.innerHTML=`
    <td class="ml-2">${count}<span>.</span></td>
    <td class="mx-2">${getName}</td>
    <td class="mx-2">${totalValue}cm<sup>2</sup></td>
    <td><button class="text-xl font-medium bg-blue-400 text-white py-1 px-4 rounded-md">Covert to m<sup>2</sup></button></td>
    `;
    tableRow.appendChild(tr);
    
}


document.getElementById('calculate-trin').addEventListener('click',function(){
   
   
    
    //input One
    const inputOneNumber = getInputValue('input-tri-one');
    //input Two
   
    const inputTwoNumber = getInputValue('input-tri-two');
    if(Number.isNaN(inputOneNumber) && Number.isNaN(inputTwoNumber)){
        alert("please Provide  Number")
       }else if(inputOneNumber < 0 || inputTwoNumber < 0){
        alert("Please Provide Posative Number")
       }else{
        document.getElementById('b').innerText=inputOneNumber;
        document.getElementById('h').innerText=inputTwoNumber;
        const tringleArea = 0.5*inputOneNumber*inputTwoNumber;
        displayValue(tringleArea,'triangel');
       }
   
   
       
    
    

   
    

    
    // //Show data in calculation Area
    //  //get Name
    //  const getName = document.getElementById('triangel').innerText;
    // const tableRow = document.getElementById('table-data');
    // const tr = document.createElement('tr');
    // tr.classList.add('trStyle')
    
    // count+=1;

    // const tableData = tr.innerHTML=`
    // <td class="ml-2">${count}</td>
    // <td class="mx-2">${getName}</td>
    // <td class="mx-2">${tringleArea}2</td>
    // <td><button class="text-xl font-medium bg-blue-400 text-white py-1 px-4 rounded-md">Covert to m<sup>2</sup></button></td>
    // `;
    // tr.style.display='flex';
    // tr.style.flexDirection='row';
    // tr.style.justifyContent='space-between';
    // tr.style.alignItems='center';
    
    
   
    
})

document.getElementById('calculate-rec').addEventListener('click',function(){

    const inputOneNumber = getInputValue('input-rec-one');

    //input Two
   
    const inputTwoNumber = getInputValue('input-rec-two');
    
    if(Number.isNaN(inputOneNumber) && Number.isNaN(inputTwoNumber)){
        alert("please Provide  Number")
       }else if(inputOneNumber < 0 || inputTwoNumber < 0){
        alert("Please Provide Posative Number")
       }
       else{
        document.getElementById('w').innerText=inputOneNumber;
        document.getElementById('l').innerText=inputTwoNumber;
        const rectangleArea = inputOneNumber*inputTwoNumber;
        displayValue(rectangleArea,'rectangle');
       }

    
})

document.getElementById('para-calculate').addEventListener('click',function(){
    const parallelogramArea = 10*12;
    displayValue(parallelogramArea,'parallelogram');
})


document.getElementById('rhombus-calculate').addEventListener('click',function(){
    const rhombusArea = 0.5*16*8;
    displayValue(rhombusArea,'rhombus');
})


document.getElementById('pentagon-calculate').addEventListener('click',function(){
    const pentagonArea = 0.5*6*10;
    displayValue(pentagonArea,'pentagon');
})


document.getElementById('ellipse-calculate').addEventListener('click',function(){
    const PI = Math.PI;
    const ellipseArea = PI*10*4;
    const ellipseAreafix=ellipseArea.toFixed(2)
    displayValue(ellipseAreafix, 'ellipse')
})


//Go Blog
document.getElementById('blog').addEventListener('click',function(){
    location.href = "blog.html";
})