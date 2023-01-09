var screen = document.getElementById('calc-display');
var btns = document.getElementsByClassName('button');

console.log(screen);    
console.log(btns);

let numericSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '.', '+', '-'];

Array.prototype.forEach.call(btns, function(button) {
    button.addEventListener("click", function() {
        if (numericSymbols.includes(button.textContent)) {
            screen.textContent += button.textContent;
        }
        switch (button.textContent) {
            case '=':
                resultMaker();
                break;
            case 'AC':
                clearDisplay();
                break;
            case 'X':
                multiply();
                break;
            case '/':
                divide();
                break;
            case 'x!':
                factorial();
                break;
        }
    })
});
function syntaxError() {
    try {
        eval(screen.textContent);
    } catch (e) {
        console.log(e.message);
        return SyntaxError;
    }
}
function resultMaker() {
    screen.textContent = eval(screen.textContent);
    syntaxError() = SyntaxError ? screen.textContent = "Syntax Error" : screen.textContent = (screen.textContent);
}
function clearDisplay() {
    screen.textContent = "";
}

function multiply(){
    screen.textContent = screen.textContent + '*';
}

function divide() {
    screen.textContent = screen.textContent + '/';
}
 function factorial() {
    var result = 1;
    if (screen.textContent === '0') {
        screen.textContent = '1';
    } else if (screen.textContent < 0) {
        screen.textContent = "Undefined";
    } else {
        for(let i = 1; i <= screen.textContent; i++) {
            result = result * i;
        }
    }
    screen.textContent = result;
 }