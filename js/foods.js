const coffees=
[
    {
    drinkName:"espresso",
    ingredients:"ground coffee, water",
    calories:10,
    flavors:"natural, ristretto(strong), doppio(double) ",
    },
    {
        drinkName:"cappuccino",
        ingredients:"esspresso, steamed milk, foam",
        calories:74,
        flavors:"caramel, mocha, ahzelnut, cinnamon, pumpkin,peppermint, chai, etc",
        },
        {
            drinkName:"frappuccino",
            ingredients:"coffee, sweetener, milk, ice, toppings",
            calories:120,
            flavors:"caramel, mocha, hazelnut, cinnamon, pumpkin,peppermint, chai, etc",
            },
            {
                drinkName:"mocha",
                ingredients:"coffee, milk, warm milk or water, chocolate, topping, flavoring",
                calories:380,
                flavors:"chocolate, vanilla, white chocolate, peppermint, pumpking, hazelnut, etc",
                },

];
const teas=
[
    {
    drinkName:"sweet tea",
    ingredients:"tea, water,sugar",
    calories:100,
    flavors:"orignial, vanilla,green,orange, strawberry, etc",
    },
    {
        drinkName:"masala chai",
        ingredients:"cinnamon,honey,chai,milk,nutmeg,ginger",
        calories:57,
        flavors:"vanilla, cinnamon, mocha,etc",
        },
        {
            drinkName:"matcha",
            ingredients:"matcha, tea, milk or water",
            calories:20,
            flavors:"green, strawberry,cherry, etc",
            },
            
];

    

const getAllCoffee = () => {
    return coffees;
  };
  
  const getAllTea = () => {
    return teas;
  };
