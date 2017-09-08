var resources = {
    coal: {
        name: 'Coal',
        amount: 0,
        perclick: 1
    },
    iron: {
        name: 'Iron',
        amount: 0,
        perclick: 1
    }
};

var craftables = [
    // Pickaxe
    {
        name: 'Pickaxe',
        requirements: {
            'Iron':  3
        },
        description: 'Increases Coal and Iron Click-Income by 1',
        effect: function() {
            resources.coal.perclick += 1;
            resources.iron.perclick += 1;
        },

        owned: 0,
        maxBuy: 1,

        rendered: false
    },
    // Gloves
    {
        name: 'Gloves',
        requirements: {
            'Iron': 1,
            'Coal': 2
        },
        description: 'Gives you 10 Coal',
        effect: function() {
            resources.coal.amount += 10;
        },

        owned: 0,
        maxBuy: 1,

        rendered: false
    }
];

var unlockedCraftables = [];