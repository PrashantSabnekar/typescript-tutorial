var Pizza = /** @class */ (function () {
    function Pizza(name) {
        this.toppings = [];
        this.name = name;
    }
    Pizza.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    return Pizza;
}());
var p1 = new Pizza("Vegge");
p1.addTopping("Paneer");
console.log(p1);
