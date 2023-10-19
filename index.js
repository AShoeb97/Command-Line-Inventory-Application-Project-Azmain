const bakeryAPI = require('./src/bakery');
const { faker } = require("@faker-js/faker");
const fs = require("fs");
const dataFolder = "data";
const dataFilePath = `${dataFolder}/bakery.json`;

function generateBakedGoods() {
    const bakeryGoods = [
        "cookies",
        "pie",
        "croissant",
        "cheese danish",
        "donut",
        "muffin",
        "cake"
    ];

    const bakedGoods = [];

    for (let i = 0; i < 7; i++) {
        bakedGoods.push({
            id: faker.random.alphaNumeric(5),
            name: bakeryGoods[i],
            priceInCents: faker.commerce.price(100, 3000, 0),
            inStock: faker.datatype.boolean(),
        });
    }

    return bakedGoods;
}

function processInput() {
    const expectedCommand = process.argv[2];
    let result = "Error: Command not found";

    if (expectedCommand === "create") {
        const [name, price, stock] = process.argv.slice(3);
        const parsedPrice = parseFloat(price);
        const parsedStock = parseInt(stock);
        result = bakeryAPI.createBakeryItem(name, parsedPrice, parsedStock);
    } else if (expectedCommand === "list") {
        result = bakeryAPI.listBakeryItems();
    } else if (expectedCommand === "view") {
        const index = parseInt(process.argv[3]);
        result = bakeryAPI.getBakeryItemDetails(index);
    } else if (expectedCommand === "delete") {
        const index = parseInt(process.argv[3]);
        result = bakeryAPI.deleteBakeryItem(index);
    } else if (expectedCommand === "update") {
        const index = parseInt(process.argv[3]);
        const [name, price, stock] = process.argv.slice(4);
        const parsedPrice = parseFloat(price);
        const parsedStock = parseInt(stock);
        result = bakeryAPI.updateBakeryItem(index, name, parsedPrice, parsedStock);
    } else if (expectedCommand === "generate") {
        const bakedItems = generateBakedGoods();
        fs.writeFileSync(dataFilePath, JSON.stringify(bakedItems, null, 2));
        result = "Random items generated and saved to bakery.json";
    } else if (expectedCommand === "addToCart") {
        bakeryAPI.addToCart();
        result = "Item added to the cart.";
    } else if (expectedCommand === "view-cart") {
        bakeryAPI.viewCart();
        result = "Shopping Cart:";
    } else if (expectedCommand === "calculate-total") {
        const totalPrice = bakeryAPI.calculateTotalPrice();
        result = `Total Price: $${totalPrice.toFixed(2)}`;
    } else if (expectedCommand === "clear-cart") {
        bakeryAPI.clearCart();
        result = "Cart cleared.";
    }

    console.log(result);
}

processInput();





