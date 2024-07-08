# E-Commerce Application Programming Interface

## Overview

This project is an E-Commerce API built using Node.js, Express.js, and MongoDB. It provides functionalities to list all items from the database, fetch details of a single item, place an order, and decrease the product stock count accordingly. The GET and POST methods have been tested and verified using an API development tool.

## Project Structure

```lua
E-COMMERCE_API/
├── ApplicationProgrammingInterface/
│   ├── config/
│   │   ├── config.env
│   │   └── ConfigDatabase.js
│   ├── Controllers/
│   │   ├── OrderControllers.js
│   │   └── ProductController.js
│   ├── Models/
│   │   ├── OrderModel.js
│   │   └── ProductModel.js
│   ├── Routes/
│   │   ├── Orders.js
│   │   ├── Products.js
│   |── Main.js
│   ├── node_modules/
│   ├── package-lock.json
│   └── package.json
├── .gitignore
├── LICENSE
└── README.md
```


## Configuration

### config/config.env

This file contains environment variables used for configuring the application, such as the database connection string.

### config/ConfigDatabase.js

This file sets up the connection to the MongoDB database.

## Controllers

### Controllers/OrderControllers.js

Handles the logic for processing orders, including placing an order and decrementing the product stock count.

### Controllers/ProductController.js

Handles the logic for fetching product details, including listing all products and retrieving details of a single product.

## Models

### Models/OrderModel.js

Defines the schema and model for orders in the database.

### Models/ProductModel.js

Defines the schema and model for products in the database.

## Routes

### Routes/Orders.js

Defines the routes related to orders:
- `POST /orders` - Place a new order and decrease the product stock count.

### Routes/Products.js

Defines the routes related to products:
- `GET /products` - List all products.
- `GET /products/:id` - Fetch details of a single product by its ID.

### Routes/Main.js

The main entry point for routing in the application.

## Installation

1. Clone the repository:
   ```sh
   git clone "https://github.com/Naveen-369/E-Commerce_API.git"
   cd E-COMMERCE_API
    ```

2. Installing the Dependencies:
    ```node
    npm install
    ```

3. Alter the environmental variables in `config/config.env` file depending on your system ports and DB ports.

4. Start the Server
    ```sh
    npm start
    ```

## API Endpoints
### Products
- ####  GET/products
    - Description: Retrieve a list of all products.
    - Response: Array of product objects.
- #### - GET/products/:ID
    - Description: Retrieve details of a single product by its ID.
    - Response: Product object.
### Orders
- #### - POST/orders
    - Description: Place a new order and decrease the product stock count.
    - Request Body: Order details including product ID and quantity.
    - Response: Confirmation of the order placement.
    - Function: Stores the order details such as the product(Array), TotalPrice(Number), etc.. as documents in the Orders collection and  decreases the value stock count of the corresponding Product in the Products collection. The Total Price is calculated via a reduce method that reduces the ProductArray to a numeric value by adding the products of price and quantity, of every product in the array.

## Testing
The Application Programming Interface's `GET` and `POST` methods are tested and verified using an API development tool. In Error occurring situations, the API gives a 404 status code and Error Message but prevents the application from crashing. All the tests showed a `200 OK ` status code, ensuring the correctness of the application, and by producing the `404` status code and error message the error handling is ensured.

## Contribution
Contributions are welcome! Please use the following steps:
- Open an issue regarding your ideas (You can continue the below steps and make the changes yourself or create the issue and the change will be made by other users by referring to the issue you created).
- Fork the Repository
- Clone the Repository to the local machine
- Refer to the [Installation](#installation) section and configure the project folder accordingly.
- Append your code, and make your changes.
- Stage your changes, commit, and push to the forked repository.
- From the forked Repo, submit a pull request, It will be review and merged ASAP.

## License
This project is licensed under the MIT License. Please refer the `LICENSE` file in the root directory for details.

## Contact
For any questions or inquiries, please message me via [LinkedIn](https://www.linkedin.com/in/naveenkumar-techenthusiast) .
