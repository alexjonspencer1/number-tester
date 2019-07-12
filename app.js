import isEven from './is-even.js';

// reference elements
const numberEnter = document.getElementById('input-number');
const buttonPress = document.getElementById('on-click');
const imageEven = document.getElementById('even-image');
const imageOdd = document.getElementById('odd-image');

buttonPress.onclick = function execute () {
    const numberFigure = Number(numberEnter.value);
    const resultingNumber = isEven(numberFigure);
    if(resultingNumber === true) {
        return imageEven.classList.remove('hidden');
    } else {
        return imageOdd.classList.remove('hidden');
    }
};





//buttonPress.onclick = function execute() {
    //const numberValue = Number(numberEnter.value); {
        //if(numberValue % 2 === 0) {
         //   return imageEven.classList.remove('hidden');
        //} else {
         //   return imageOdd.classList.remove('hidden');
       // }
   // }
//};