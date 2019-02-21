
var answer = prompt("Quel est ton nombre");


 if (answer==0 || answer==1){
 	console.log(1);}
 else {
 	let result = 1;
	for(let number=1; number <= answer; number++){
	  	result = number*result;
  	}
  	console.log(result);
  }



