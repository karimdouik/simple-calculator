let input= document.getElementById("result");
function Clickbutton(value){
     input.value += value;
}
function clearInput(){
    input.value ="";
}
function calculate(){
     let res= eval(input.value);
     input.value=res;
}

function percentageIndex(){
    let index = input.value.lastIndexOf("+") || input.value.lastIndexOf("-") || input.value.lastIndexOf("*") || input.value.lastIndexOf("/");
    let percentage = parseInt(input.value.substring(index + 1)) / 100;
    let result;
    if (index != -1) {
        let operator = input.value.charAt(index);
        let operand1 = parseFloat(input.value.substring(0, index));
        if (operator === '+') {
            result = operand1 + (operand1 * percentage);
        } else if (operator === '-') {
            result = operand1 - (operand1 * percentage);
        } else if (operator === '*') {
            result = operand1 * percentage;
        } else if (operator === '/') {
            result = operand1 / percentage;
        }
        input.value = result;
    } else {
        result = parseFloat(input.value) / 100;
        input.value = result;
    }
}
