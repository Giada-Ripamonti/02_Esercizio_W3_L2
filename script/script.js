window.alert('Ciao =) Vediamo se devi fare la spesa')

var product = prompt ('Cosa ti serve?')
var need = prompt ('Quanto te ne serve?')
var have = prompt ('Quanto ne hai?')

document.getElementById('product').innerHTML = product
document.getElementById('need').innerHTML = need + (' ') + product;
document.getElementById('have').innerHTML = have + (' ') + product;

let num1 = parseInt(need)
let num2 = parseInt(have)

let result = num2 - num1;
console.log(result)

if(result >= num1) {
    document.getElementById('grocery').innerHTML = ('Non ti manca nulla!')
}

if(result < num1) {
    document.getElementById('grocery').innerHTML = ('Ti servono ancora: ') + -(result) + (' ') + product;
}