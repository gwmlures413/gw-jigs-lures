```javascript
// ===============================
// GW Jigs & Lures Products
// ===============================

const products = {

    senko: {
        id: "senko",
        name: "5\" Senko",
        price: 5.49,
        image: "placeholder-lure.png",
        badge: "🏆 Best Seller",
        description: "A versatile stick bait perfect for Texas rigs, wacky rigs, and weightless presentations.",
        colors: [
            "Mint Chocolate Chip",
            "Gunsmoke",
            "Junebug",
            "Pearl",
            "Watermelon",
            "Watermelon Candy",
            "Chartreuse",
            "Charlime",
            "Pink Lemonade",
            "Blue Jay"
        ]
    },

    fluke: {
        id: "fluke",
        name: "Fluke",
        price: 5.49,
        image: "placeholder-lure.png",
        badge: "",
        description: "Soft jerkbait for bass fishing.",
        colors: ["Coming Soon"]
    },

    ripper: {
        id: "ripper",
        name: "Ripper",
        price: 4.99,
        image: "placeholder-lure.png",
        badge: "",
        description: "Aggressive paddle-tail style bait.",
        colors: ["Coming Soon"]
    },

    brushhog: {
        id: "brushhog",
        name: "Brush Hog",
        price: 4.99,
        image: "placeholder-lure.png",
        badge: "",
        description: "Excellent flipping and pitching bait.",
        colors: ["Coming Soon"]
    },

    curlytail: {
        id: "curlytail",
        name: "Curly Tail",
        price: 5.99,
        image: "placeholder-lure.png",
        badge: "",
        description: "Classic curly tail grub.",
        colors: ["Coming Soon"]
    },

    speedworm: {
        id: "speedworm",
        name: "Speed Worm",
        price: 6.49,
        image: "placeholder-lure.png",
        badge: "",
        description: "Great for swimming through grass.",
        colors: ["Coming Soon"]
    },

    cricket: {
        id: "cricket",
        name: "Cricket",
        price: 3.99,
        image: "placeholder-lure.png",
        badge: "",
        description: "Small profile bait.",
        colors: ["Coming Soon"]
    },

    ragebug: {
        id: "ragebug",
        name: "Rage Bug",
        price: 4.99,
        image: "placeholder-lure.png",
        badge: "",
        description: "Creature bait with lots of action.",
        colors: ["Coming Soon"]
    },

    mystery: {
        id: "mystery",
        name: "Mystery Senko Pack",
        price: 5.49,
        image: "placeholder-lure.png",
        badge: "🎁 Mystery",
        description: "Random remelt colors that are one-of-a-kind.",
        colors: ["Random Color"]
    },

    minnow: {
        id: "minnow",
        name: "Crappie Minnow",
        price: 1.99,
        image: "placeholder-lure.png",
        badge: "",
        description: "Soft plastic crappie minnow.",
        colors: ["Coming Soon"]
    },

    jig116: {
        id: "jig116",
        name: "1/16 oz Crappie Jig",
        price: 8.99,
        image: "placeholder-lure.png",
        badge: "",
        description: "Hand-tied crappie jig.",
        colors: ["Coming Soon"]
    },

    jig18: {
        id: "jig18",
        name: "1/8 oz Crappie Jig",
        price: 9.99,
        image: "placeholder-lure.png",
        badge: "⭐ Popular",
        description: "Perfect for deeper water.",
        colors: ["Coming Soon"]
    },

    custom116: {
        id: "custom116",
        name: "Custom 1/16 oz Jig",
        price: 9.99,
        image: "placeholder-lure.png",
        badge: "🎨 Custom",
        description: "Build your own custom jig.",
        custom: true
    },

    custom18: {
        id: "custom18",
        name: "Custom 1/8 oz Jig",
        price: 10.99,
        image: "placeholder-lure.png",
        badge: "🎨 Custom",
        description: "Build your own custom jig.",
        custom: true
    }

};

function getProduct(id){
    return products[id];
}
```
