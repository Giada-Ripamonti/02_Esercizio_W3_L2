window.alert('Ciao =) Vediamo se devi fare la spesa!');

var product = prompt ('Cosa ti serve?');
var need = prompt ('Quanti kg ti servono?');
var have = prompt ('Quanti kg ne hai?');    

document.getElementById('product').innerHTML = product;
document.getElementById('need').innerHTML = need + ('kg');
document.getElementById('have').innerHTML = have + ('kg');

let num1 = +need;
let num2 = +have;

let result = num2 - num1;
console.log(result);

if(result >= 0) {
    document.getElementById('grocery').innerHTML = ('Non ti manca nulla!')
}

else{
    document.getElementById('grocery').innerHTML = ('Ti servono ancora: ') + -(result) + ('kg') + (' ') + ('di') + (' ') + product;
}
