const fs = require("fs");
const { nanoid } = require("nanoid");
const path = require("path");
const dataFilePath = path.join(__dirname, "../data/bakery.json");
const cartFilePath = path.join(__dirname, "../data/shoppingCart.json");
let bakeryItems = [];
let shoppingCart = [];

function loadCartItems() {
    try {
        const data = fs.readFileSync(cartFilePath);
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

function saveCartItemsToFile(cartItems) {
    const dataToWrite = JSON.stringify(cartItems, null, 2);
    fs.writeFileSync(cartFilePath, dataToWrite);
}

loadCart()

function addToCart() {
    const cartItems = loadCartItems();
    for (let item of bakeryItems) {
        if (item.inStock) {
            cartItems.push(item)
        }
    }

    saveCartItemsToFile(cartItems);
}

function viewCart() {
    const cartItems = loadCartItems();
    for (let item of cartItems) {
        console.log(`Product: ${item.product}, Quantity: ${item.quantity}, Price: ${item.price}`);
    }
}


function loadBakeryItems() {
    try {
        const data = fs.readFileSync(dataFilePath);
        bakeryItems = JSON.parse(data);
        console.log(bakeryItems);
    } catch (err) {
        bakeryItems = [];
    }
}

function loadCart() {
    try {
        const data = fs.readFileSync(cartFilePath);
        shoppingCart = JSON.parse(data);
        console.log(shoppingCart);
    } catch (err) {
        shoppingCart = [];
    }
}

function saveBakeryItemsToFile() {
    const dataToWrite = JSON.stringify(bakeryItems, null, 2);
    fs.writeFileSync(dataFilePath, dataToWrite);
}

loadBakeryItems();

function createBakeryItem(name, priceInCents, inStock) {
    const id = nanoid(4);
    const newBakeryItem = { id, name, priceInCents, inStock };
    bakeryItems.push(newBakeryItem);
    saveBakeryItemsToFile();
    return bakeryItems;
}

function listBakeryItems() {
    return bakeryItems;
}

function getBakeryItemDetails(i) {
    if (i >= 0 && i < bakeryItems.length) {
        return bakeryItems[i];
    }
    return "Item not found.";
}

function deleteBakeryItem(i) {
    if (i >= 0 && i < bakeryItems.length) {
        bakeryItems.splice(i, 1);
        saveBakeryItemsToFile();
        return "Item deleted.";
    }
    return "Item not found.";
}

function updateBakeryItem(i, name, priceInCents, inStock) {
    if (i >= 0 && i < bakeryItems.length) {
        bakeryItems[i] = { name, priceInCents, inStock };
        saveBakeryItemsToFile();
        return "Item updated.";
    }
    return "Item not found.";
}



function viewCart() {
    for (let item of shoppingCart) {
        console.log(`Product: ${item.product}, Quantity: ${item.quantity}, Price: ${item.price}`);
    }
}
function calculateTotalPrice() {
    let totalPrice = 0;
    for (let item of shoppingCart) {
        totalPrice += Number(item.priceInCents) / 100;
    }
    return totalPrice
}

function clearCart() {
    shoppingCart.length = 0
    saveCartItemsToFile(shoppingCart)
}



module.exports = {
    createBakeryItem,
    listBakeryItems,
    getBakeryItemDetails,
    deleteBakeryItem,
    updateBakeryItem,
    viewCart,
    calculateTotalPrice,
    clearCart,
    addToCart
};
