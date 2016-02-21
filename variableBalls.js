// na switch
unction getBal(){
	var ball = prompt('write it');
	ball = parseFloat(ball)
switch(true){
		case ((ball <= 100) && (ball >= 95)):
			console.log('A');
			break;
		case ((ball <= 94) && (ball >= 85)):
			console.log('B');
			break;
		case ((ball <= 84) && (ball >= 75)):
			console.log('C');
			break;
		case ((ball <= 74) && (ball >= 65)):
			console.log('D');
			break;
		case ((ball <= 64) && (ball >= 60)):
			console.log('E');
			break;
		default: console.log('error');
		}
	}
getBal()

//na if/else
function getBal(){
	var ball = prompt('write it');
	ball = parseFloat(ball)
	if ((ball <= 100) && (ball >= 95)){
			console.log('A');
	}else if ((ball <= 94) && (ball >= 85)){
			console.log('B');
	}else if ((ball <= 84) && (ball >= 75)){
			console.log('C');
	}else if ((ball <= 74) && (ball >= 65)){
			console.log('D');
	}else if ((ball <= 64) && (ball >= 60)){
			console.log('E');
	}else if ((ball >= 100) || (ball <= 0)){
			console.log('ERROR');
	}else if ((ball <= 59) && (ball >= 0)){
			console.log('you is shit');
	}else {
			console.log('ERROR');
		};
	}
	
getBal();
