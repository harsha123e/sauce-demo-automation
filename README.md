# [Sauce Demo](https://www.saucedemo.com/) Automated Testing Suite

This project aims to create a robust automated testing suite to verify essential user journeys on the Sauce Demo e-commerce platform.


Automated testing is vital for maintaining software quality and efficiency. It helps identify issues early, ensuring that key functionalities of the Sauce Demo website work as intended. 

## Scope

The automated tests cover essential user journeys for the Sauce Demo e-commerce site, focusing on:
- User authentication
- Product selection and interaction
- Shopping cart management
- Checkout process
- Product detail verification

The scope aims to cover about 80% of the critical functionality of an e-commerce platform, ensuring smooth user experience across login, purchasing, and checkout processes.

## Test Cases

1. **User Authentication**
   - Verify login with valid credentials.
   - Verify login with invalid credentials.
   - Verify logout functionality.

2. **Product Interaction**
   - Test product selection and addition to the cart.
   - Verify that multiple products can be added to the cart.
   - Verify that a product can be removed from the cart.

3. **Shopping Cart Management**
   - Test viewing the cart with multiple products.
   - Test clearing the cart (removing all items).

4. **Checkout Process**
   - Test completing a purchase with valid information.
   - Test the checkout process with invalid shipping information.
   - Verify the order summary after completing the purchase.

5. **Product Details Verification**
   - Verify that product details are displayed correctly.

## Technologies Used

- **Java Selenium**: For automating web tests in Java.
- **Playwright**: For browser automation.
- **Cypress**: For end-to-end testing.
- **GitHub Actions**: For CI/CD integration.

## Child README.md Files

This project includes multiple child `README.md` files, each detailing specific frameworks or sections of the automated testing suite:

- **Java Selenium**: Located in the `java-selenium` folder, this document outlines the setup and execution of tests written in Java Selenium.
- **Cypress**: Located in the `cypress` folder, this document provides instructions for running tests using the Cypress framework.
- **Playwright**: Located in the `playwright` folder, this document covers the implementation of tests using the Playwright framework.

Each child README includes setup instructions, usage examples, and specific test case details relevant to that framework.

## Test Data

The tests use a mix of valid and invalid data to simulate real-world scenarios:
- **User Authentication**: Predefined valid and invalid user credentials.
- **Checkout Process**: Test cases use both valid and invalid shipping information.
- **Product Details and Cart**: A standard list of products is used to verify product interaction and cart management functionality.

## Test Case Execution Steps

#### 1. **User Authentication**
**Objective**: Verify user login functionality with both valid and invalid credentials.

- **Test Case 1.1: Verify Login with Valid Credentials**
  **Steps**:
  1. Navigate to the Sauce Demo Login Page: Open `https://www.saucedemo.com`.
  2. Enter Username: Type `standard_user` into the username field.
  3. Enter Password: Type `secret_sauce` into the password field.
  4. Click Login Button: Click on the login button.
  5. Verify Outcome:
     - Check Welcome Message: Ensure that the welcome message matches 'Products'.

- **Test Case 1.2: Verify Login with Invalid Credentials**
  **Steps**:
  1. Navigate to the Sauce Demo Login Page: Open `https://www.saucedemo.com`.
  2. Enter Username: Type an invalid username (e.g., `invalid_user`).
  3. Enter Password: Type an invalid password (e.g., `wrong_password`).
  4. Click Login Button: Click on the login button.
  5. Verify Outcome: Ensure the error message contains 'Epic sadface:'.

- **Test Case 1.3: Verify Logout Functionality**
  **Steps**:
  1. Navigate to the Sauce Demo Login Page: Open `https://www.saucedemo.com`.
  2. Enter Username: Type `standard_user` into the username field.
  3. Enter Password: Type `secret_sauce` into the password field.
  4. Click Login Button: Click on the login button.
  5. Open Menu: Click on the menu button (three horizontal lines).
  6. Click Logout: Click on the logout link.
  7. Verify Logout: Ensure the login button is displayed on the login page.

#### 2. **Product Interaction**
**Objective**: Verify that users can interact with products.

- **Test Case 2.1: Test Product Selection and Addition to Cart**
  **Steps**:
  1. Navigate to the Sauce Demo Login Page: Open `https://www.saucedemo.com`.
  2. Enter Username: Type `standard_user` into the username field.
  3. Enter Password: Type `secret_sauce` into the password field.
  4. Click Login Button: Click on the login button.
  5. Select Product: Choose the first product from the list.
  6. Add Product to Cart: Click on the 'Add to Cart' button for the selected product.
  7. Verify Cart Badge: Ensure that the shopping cart badge displays '1'.

- **Test Case 2.2: Verify That Multiple Products Can Be Added to the Cart**
  **Steps**:
  1. Navigate to the Sauce Demo Login Page: Open `https://www.saucedemo.com`.
  2. Enter Username: Type `standard_user` into the username field.
  3. Enter Password: Type `secret_sauce` into the password field.
  4. Click Login Button: Click on the login button.
  5. Add Multiple Products: Click 'Add to Cart' for each product listed.
  6. Verify Cart Badge: Ensure the shopping cart badge displays the total number of products added.

- **Test Case 2.3: Verify That a Product Can Be Removed from the Cart**
  **Steps**:
  1. Navigate to the Sauce Demo Login Page: Open `https://www.saucedemo.com`.
  2. Enter Username: Type `standard_user` into the username field.
  3. Enter Password: Type `secret_sauce` into the password field.
  4. Click Login Button: Click on the login button.
  5. Add Product to Cart: Click 'Add to Cart' for one product.
  6. Open Cart: Click on the shopping cart link.
  7. Capture Initial Cart Count: Note the number of items in the cart.
  8. Remove Product from Cart: Click on the remove button for the product.
  9. Verify Cart Count: Ensure the number of items in the cart has decreased by one.

#### 3. **Shopping Cart Management**
**Objective**: Verify the functionality of the shopping cart.

- **Test Case 3.1: Test Viewing the Cart with Multiple Products**
  **Steps**:
  1. Navigate to the Sauce Demo Login Page: Open `https://www.saucedemo.com`.
  2. Enter Username: Type `standard_user` into the username field.
  3. Enter Password: Type `secret_sauce` into the password field.
  4. Click Login Button: Click on the login button.
  5. Add Products to Cart: Add multiple products to the cart.
  6. Open Cart: Click on the shopping cart link.
  7. Verify Product List: Ensure that all added products are displayed in the cart.

- **Test Case 3.2: Test Clearing the Cart (Removing All Items)**
  **Steps**:
  1. Navigate to the Sauce Demo Login Page: Open `https://www.saucedemo.com`.
  2. Enter Username: Type `standard_user` into the username field.
  3. Enter Password: Type `secret_sauce` into the password field.
  4. Click Login Button: Click on the login button.
  5. Add Products to Cart: Add multiple products to the cart.
  6. Open Cart: Click on the shopping cart link.
  7. Remove All Products: Click on the remove button for each product until the cart is empty.
  8. Verify Empty Cart: Ensure the cart shows 'Your cart is empty'.

#### 4. **Checkout Process**
**Objective**: Verify the checkout functionality.

- **Test Case 4.1: Test Completing a Purchase with Valid Information**
  **Steps**:
  1. Navigate to the Sauce Demo Login Page: Open `https://www.saucedemo.com`.
  2. Enter Username: Type `standard_user` into the username field.
  3. Enter Password: Type `secret_sauce` into the password field.
  4. Click Login Button: Click on the login button.
  5. Add Product to Cart: Choose a product and add it to the cart.
  6. Open Cart: Click on the shopping cart link.
  7. Proceed to Checkout: Click on the checkout button.
  8. Enter Shipping Information: Fill in the first name, last name, and postal code fields.
  9. Continue Checkout: Click on the continue button.
  10. Complete Purchase: Click on the finish button.
  11. Verify Confirmation: Ensure the confirmation message contains "thank you for your order".

- **Test Case 4.2: Test the Checkout Process with Invalid Shipping Information**
  **Steps**:
  1. Navigate to the Sauce Demo Login Page: Open `https://www.saucedemo.com`.
  2. Enter Username: Type `standard_user` into the username field.
  3. Enter Password: Type `secret_sauce` into the password field.
  4. Click Login Button: Click on the login button.
  5. Add Product to Cart: Choose a product and add it to the cart.
  6. Open Cart: Click on the shopping cart link.
  7. Proceed to Checkout: Click on the checkout button.
  8. Enter Invalid Shipping Information: Leave the first name or last name empty.
  9. Attempt to Continue Checkout: Click on the continue button.
  10. Verify Error Message: Ensure an appropriate error message is displayed.

- **Test Case 4.3: Verify the Order Summary After Completing the Purchase**
  **Steps**:
  1. Navigate to the Sauce Demo Login Page: Open `https://www.saucedemo.com`.
  2. Enter Username: Type `standard_user` into the username field.
  3. Enter Password: Type `secret_sauce` into the password field.
  4. Click Login Button: Click on the login button.
  5. Add Product to Cart: Choose a product and add it to the cart.
  6. Open Cart: Click on the shopping cart link.
  7. Proceed to Checkout: Click on the checkout button.
  8. Enter Shipping Information: Fill in the first name, last name, and postal code fields.
  9. Continue Checkout: Click on the continue button.
  10. Verify Order Summary: Ensure the order summary displays the correct product, price, and total amount.

#### 5. **Product Details Verification**
**Objective**: Verify that product details are displayed correctly.

- **Test Case 5.1: Verify That Product Details Are Displayed Correctly**
  **Steps**:
  1. Navigate to the Sauce Demo Login Page: Open `https://www.saucedemo.com`.
  2. Enter Username: Type `standard_user` into the username field.
  3. Enter Password: Type `secret_sauce` into the password field.
  4. Click Login Button: Click on the login button.
  5. Select Product: Click on a product to view its details.
  6. Verify Product Name: Ensure the product name matches the displayed name.
  7. Verify Product Price: Ensure the product price is displayed correctly.
  8. Verify Product Description: Ensure that the product description matches the expected details.

## Acknowledgements

Thanks to the creators of the tools used in this project.
