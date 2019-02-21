var pyramid = prompt("Quel est le nombre d'etages de la pyramide");



let a = '#'
let b = ' '
for (let count = 1; count <= pyramid; count++) {
	console.log(b.repeat(pyramid - count) + a.repeat(count));
};


