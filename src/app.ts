const pizza = {
    name: 'Pepperoni',
    price: 15,
    getName() {
        return this.name;
    },
};

console.log(pizza.getName())

const toppings = ['pepperoni'];

const order = {pizza, toppings};

console.log(order)