let explicitString = "Some String";
let implicitString: string = "some implicit string"

console.log(explicitString);
console.log(implicitString);

let pizzaSize: string = 'small';

function selectSize (size: 'small' | 'medium' | 'large') {
    pizzaSize = size;
}

selectSize('medium');

console.log(pizzaSize);