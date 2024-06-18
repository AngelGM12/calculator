const operation = document.querySelector('#opScreen');
const history = document.querySelector('#history');

let num1 = null;
let num2 = null;
let op = '';
let res = 0;

function displayNumber (num) {

    /*console.log(operation.textContent.length);*/
    
    if(operation.textContent.length < 12){
        operation.textContent = operation.textContent + num;
    }
    

}
function equal() {
    history.textContent = history.textContent + operation.textContent + "=";
    num2 = operation.textContent;
    console.log(op)
    switch(op){
        case 'x' : res = num1 * num2;
        console.log("mult");
        break;
        case '/' : res = num1 / num2;
        console.log("divide");
        break;
        case '+' : res = parseInt(num1) + parseInt(num2);
        console.log("add");
        break;
        case '-' : res = num1 - num2;
        console.log("rest");
        break;
    }
    console.log(res)
    operation.textContent = res;
    num1=null;
    
}

function multiply() {
    history.textContent = operation.textContent + "x";

    if(num1==null){
        num1 = operation.textContent;
    }
    else{
        num2 = operation.textContent;
    }
    op = 'x';
    operation.textContent = "";
}
function divide() {
    history.textContent = operation.textContent + "/";

    if(num1==null){
        num1 = operation.textContent;
    }
    else{
        num2 = operation.textContent;
    }
    op = '/';
    operation.textContent = "";
}
function add() {
    history.textContent = operation.textContent + "+";

    if(num1==null){
        num1 = operation.textContent;
    }
    else{
        num2 = operation.textContent;
    }
    op = '+';
    operation.textContent = "";
}
function subtract() {
    history.textContent = operation.textContent + "-";

    if(num1==null){
        num1 = operation.textContent;
    }
    else{
        num2 = operation.textContent;
    }
    op = '-';
    operation.textContent = "";
}

function clearAll(){
    operation.textContent = "";
    history.textContent = "";
    num1 = null;
    num2 = null;
    op = null
}

function clears(){
    console.log("asdf")
    operation.textContent = "";
}

function deletes() {
    if(operation.textContent != ""){
        str = operation.textContent;
        let arr = [...str ];
        arr.splice(-1);
        operation.textContent = parseInt(arr.join(''));
        if(operation.textContent == "NaN"){
            operation.textContent = "";
            
        }
        
        
    }
}