
var n1=parseInt(prompt("enter a number"));
var n2=parseInt(prompt("enter the number"));
var  op = prompt("enter the operator");
switch(op){
    case '+':document.getElementById("result").textContent=n1+n2;break;
    case '-':document.getElementById("result").textContent=n1-n2;break;
    case '*':document.getElementById("result").textContent=n1*n2;break;
    case '/':document.getElementById("result").textContent=n1/n2;break;
}



