/*calculator
var nom1 = prompt("Пожалуйста, введите первое число для вычисления:")
var num1 = parseInt(nom1)
var nom2 = prompt("Пожалуйста, введите второе число для вычисления:")
var num2 = parseInt(nom2);
var znak = prompt("Пожалуйста, введите знак вычисления:")
var act = num1 + znak + num2;
alert(eval(act));
*/

var act;
function culc(){
var nom1 = prompt("Пожалуйста, введите первое число для вычисления:");
return parseInt(nom1);
}

function culc2(){
var nom2 = prompt("Пожалуйста, введите второе число для вычисления:");
return parseInt(nom2);
}

function o(){
 
 function oper(){
var znak = prompt("Пожалуйста, введите знак вычисления:");
switch(znak){
		case "+":
			act = culc() + culc2()
			break;
		case "-":
			act = culc() - culc2()
		break;
		case "*":
			act = culc() * culc2()
		break;
		case "/":
            act = culc() / culc2()
		break;
		
		default: alert("ERROR")
        oper()
			}}
oper()
alert("Результат: " + act);}
o()



/*	switch(znak){
		case "+":
		case "-":
		case "*":
		case "/": var act = parseFloat(num1 + znak + num2);
}
alert("Результат: " + eval(act));
		
		default: doAgin();


/*
var a=prompt("Give me 1 number!"); 
var b=prompt("Give me 2 number!"); 
var op=prompt("Give me operator."); 
parseFloat(a); 
parseFloat(b); 
if(op="+"){ 
console.log(a+b);} 
else if(op="-"){ 
console.log(a-b);} 
else if(op="*"){ 
console.log(a*b);} 
else if(op="/"){ 
console.log(a/b);} 
else(console.log("Error!"));


