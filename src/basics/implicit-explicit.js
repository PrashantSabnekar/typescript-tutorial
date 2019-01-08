var explicitString = "Some String";
var implicitString = "some implicit string";
console.log(explicitString);
console.log(implicitString);
var pizzaSize = 'small';
function selectSize(size) {
    pizzaSize = size;
}
selectSize('medium');
console.log(pizzaSize);
