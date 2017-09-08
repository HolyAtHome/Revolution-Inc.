var resources = {
    coal: {
        name: 'Coal',
        amount: 0
    },
    iron: {
        name: 'Iron',
        amount: 0
    }
};

var craftables = [
    {
        name: "Pickaxe",
        requirements: {
            'Iron':  3
        },
        rendered: false
    },
    {
        name: "Gloves",
        requirements: {
            'Iron': 1,
            'Coal': 2
        },
        rendered: false
    }
];

var unlockedCraftables = [];