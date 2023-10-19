# # Command-Line-Inventory-Application-Project-Azmain

# # Bakery-App
This is a bakery app selling a variety of baked goods for everyone to enjoy. To make it easier for the consumer, this app allows you to add the items that are in stock to your cart, update it if you decide you want to add an item, delete an item you don't want, and it will also calculate the final price so you don't have to. Obviously you can view your cart before placing the order and if you decide you don't want anything, it will clear it for you. 

## Getting Started
1. Clone this repository to your local machine.
2. Install the required dependencies using npm install nanoid@3 and npm install @faker-js/faker --save-dev.

 Use the command-line to interact with the application. Use the following script commands:
- `create <name> <priceInCents> <inStock>`: Create a new item.
- `list`: Lists all items.
- `view <index>`: View details of a specific item.
- `delete <index>`: Delete an item.
- `update <index> <name> <priceInCents> <inStock>`: Update an item.
- `viewcart`: View the items in the shopping cart.
- `addtocart <itemIndex> <quantity>`: Adds an item to the shopping cart.
- `totalprice`: Calculates the total price of items.
- `clearcart`: Clears the items in the cart.

## File Structure
- `data/bakery.json`: JSON file containing the bakery items.
- `data/shoppingCart.json`: JSON file containing the items in the shopping cart
- `README.md`: Explains this assignment.
- `bakery.js`: Contains the functions.
- `index.js`: Contains bakery API.

## Functions
- `createBakeryItem(name, priceInCents, inStock)`: Creates a new item.
- `listBakeryItems()`: Lists all items.
- `getBakeryItemDetails`: View details of a specific item.
- `deleteBakeryItem(index)`: Deletes an item. 
- `updateBakeryItem(index, name, priceInCents, inStock)`: Updates an item.
- `view-cart()`: View the contents of the shopping cart.
- `addToCart(itemIndex, quantity)`: Add an item to the shopping cart.
- `calculate-total-price()`: Calculate the total price of items in the shopping cart.
- `clear-cart()`: Cancel the shopping cart.

