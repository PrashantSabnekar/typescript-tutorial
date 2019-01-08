class Pizza{
    name: string;
    toppings: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

let p1 = new Pizza("Vegge");
p1.addTopping("Paneer");

console.log(p1);
