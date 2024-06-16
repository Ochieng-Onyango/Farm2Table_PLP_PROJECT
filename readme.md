### Farm2Table Application

#### For Farmers:
Farmers start by registering on the Farm2Table platform, providing their personal and farm details, including name, email, password, and location. Once registered, farmers gain access to a dedicated farmer dashboard.

In the farmer dashboard, they can manage their farm's profile, update their information, and add captivating images showcasing their farm and poultry. Farmers can list their poultry products, providing details such as product name, description, category, and setting competitive prices.

When a customer places an order for their poultry, farmers receive notifications in their dashboard. They can view and manage order details, updating the order status from pending to shipped to delivered. The platform facilitates direct communication between farmers and customers, allowing farmers to respond to inquiries, address concerns, and provide updates on product availability or special offerings.

#### For Customers:
Customers begin by registering on the Farm2Table app, providing their personal details such as name, email, and password. Upon successful registration, they gain access to an extensive catalog of locally sourced, farm-fresh poultry.

Customers can browse product listings, conveniently categorized for easy navigation, and filter products based on preferences such as product category or location. When customers find poultry products they wish to purchase, they can add them to their virtual cart and proceed to checkout. The app provides secure payment options for seamless transactions.

After placing an order, customers receive real-time updates on their order status, from processing to shipping to delivery. They can communicate directly with the farmer fulfilling their order, fostering a sense of connection and transparency. Customers can leave reviews and ratings for the poultry they purchase, helping others make informed decisions and providing valuable feedback to the farmers.

#### Overall Experience:
The Farm2Table app revolutionizes the way customers access locally sourced, farm-fresh poultry, offering a seamless and transparent experience that connects them directly with farmers. This promotes a sustainable and community-driven food ecosystem.

### Step 1: Project Setup
Create a new directory for your project and navigate into it.

    mkdir PLP_2024FEB_COHORT_PROJECT
    cd PLP_2024FEB_COHORT_PROJECT

### Initialize a new Node.js project.
    npm init -y

### Install necessary dependencies.
    npm install express mysql body-parser

### Step 2: Set up the Backend
    Create a server.js file in your project directory.
    Create a MySQL database named farm2table
        CREATE DATABASE farm2table;
    USE farm2table;

    CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    is_farmer BOOLEAN NOT NULL DEFAULT 0
    );

    CREATE TABLE farmers (
    id INT PRIMARY KEY,
    farm_name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    FOREIGN KEY (id) REFERENCES users(id)
    );

    CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(255) NOT NULL,
    farmer_id INT NOT NULL,
    FOREIGN KEY (farmer_id) REFERENCES farmers(id)
    );

    CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    order_date DATETIME NOT NULL,
    status VARCHAR(255) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES users(id)
    );

    CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
    );

### Step 3: Frontend Setup
    Create a home.html file for the homepage.
    Create an about.html file for the about us page.
    Create a contact.html file for the contact us.
    Create a general.css file to style HTML.
    Create a script.js file to handle frontend interactions.
### Step 4: Testing
    node server.js
    Open web browser and navigate to http://localhost:3000.
