	/*var sum = prompt("Введите количество вводимых оценок")
function tsickl(){
	while(alert("Try again")){
          	resultat();
}

function resultat(){//working
var bll = prompt('enter yuor ball')
var ball = parseInt(bll);
	switch(true){
	case ((ball <= 100) && (ball >= 60)): 
           console.log("You are passed");
           break;
       case ((ball <=59) && (ball >=0)): 
           console.log("You are not passed");
           break;
          default: tsickl();
   }
}
resultat()

*/

var mark = [];
var subject = [];
var resul = [];
var sum = prompt("Введите количество вводимых оценок");
for(var i=1; i<=sum; i++){
  
  var bll = prompt((i) + "-ая оценка");
  var ball = parseInt(bll);
	switch(true){
	case ((ball <= 100) && (ball >= 60)): 
         sub = prompt("предмет?");
         res = "You are passed";
           break;
       case ((ball <=59) && (ball >=0)):
         sub = prompt("предмет?");
         res = "You are not passed";
           break;
          default: while(alert("Try again")){
          	var bll = prompt((i) + "-ая оценка");
          };
    };
mark.push(ball);
subject.push(sub);
resul.push(res);
for(g=0; g<subject.length; g++){
 for(i=0; i<mark.length; i++){
  for(j=0; j<resul.length; j++){
text= "<ol>";
text += "<li>" + subject[g]+ "</li><li>" + "Ваш балл:"+ mark[i] + "</li><li>" + resul[j] + "</li>"}
}}
text += "</ol>";
document.write(text)
}