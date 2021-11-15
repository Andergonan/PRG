//console log - 1
console.log("> Vypocet");
let x = 3;
let y = x + 2;
console.log(y + " km");

//console log - 2
console.log("> Nasobilka");
for(let i = 5; i<=50; i +=5) {
    console.log(i);
}

//console log - 3
console.log("> Faktorial");
let factorial = 1;
for(let i = 1; i <= 5; i++) {
    factorial *= i;
    console.log(factorial);
}

//console log - 4
console.log("> Funkce");
console.log(suma(3, 2));
console.log(suma(3));
function suma(x, y = 1) {
    return x + y;
}