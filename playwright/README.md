# Automated Testing Framework Setup with Playwright

This document outlines the steps to set up an automated testing framework using Playwright.

## 1. **Plan Test Cases with Steps**
- Clearly outline the test scenarios, expected outcomes, and detailed steps for each test case. This will help maintain clarity and direction while writing the tests.
- [Test Plan](../README.md)

## 2. **Install Node.js**
- Ensure you have Node.js installed. Verify the installation using the following command:
  ```bash
  node -v
  ```

## 3. **Create a New Project**
- Create a new directory for your project and navigate to it:
  ```bash
  mkdir sauce-demo-automation
  cd sauce-demo-automation
  ```

## 4. **Initialize the Project with npm**
- Initialize a new Node.js project:
  ```bash
  npm init -y
  ```

## 5. **Install Playwright and Testing Dependency**
- Install Playwright and the Playwright test dependency:
  ```bash
  npm install -D playwright @playwright/test
  ```

## 6. **Create Page Object Models (POM)**
- Create a `pages` directory and define a class for each page in your application. Here’s an example of a POM for the Sauce Demo login page, saved as `LoginPage.js`:

  ```javascript
  class LoginPage {
      constructor(page) {
          this.page = page;
          this.usernameInput = '#user-name';
          this.passwordInput = '#password';
          this.loginButton = '#login-button';
          this.errorMessage = '.error-message-container';
      }

      async login(username, password) {
          await this.page.fill(this.usernameInput, username);
          await this.page.fill(this.passwordInput, password);
          await this.page.click(this.loginButton);
      }

      async getErrorMessage() {
          return await this.page.textContent(this.errorMessage);
      }
  }

  module.exports = LoginPage;
  ```

## 7. **Write Test Cases for the Sauce Demo Login Page**
- Create a `tests` directory and add your test files. Here’s a sample test case for the login functionality using the POM, saved as `login.spec.js`:

  ```javascript
  const { test, expect } = require('@playwright/test');
  const LoginPage = require('../pages/LoginPage');

  test('Should display error message when logging in with invalid credentials', async ({ page }) => {
      const loginPage = new LoginPage(page);

      await page.goto('https://www.saucedemo.com/');
      await loginPage.login('invalid_user', 'invalid_password');

      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain('Username and password do not match any user in this service');
  });
  ```

## 8. **Add Playwright Configurations for Headless Execution and Multiple Browsers**
- Create a `playwright.config.js` file for your configurations:
  ```javascript
  const { defineConfig } = require('@playwright/test');

  const isHeadless = process.env.HEADLESS === 'true';
  const browserName = process.env.BROWSER || 'chromium'; // Default to chromium if not specified

  module.exports = defineConfig({
      use: {
          headless: isHeadless, // Use headless mode based on environment variable
          browserName: browserName, // Use specified browser or default to chromium
      },
      reporter: 'html',
      timeout: 30000,
      retries: 1,
      workers: parseInt(process.env.WORKERS) || 4, // Control the number of parallel tests
  });
  ```

## 9. **Run Tests**
- Add a script to your `package.json` to run the tests:
  ```json
  "scripts": {
      "test": "playwright test"
  }
  ```
- Run the tests using:
  ```bash
  npm test
  ```

- Run tests in headed browsers
    ```bash
    npx playwright test --headed
    ```
- Run all the tests against a specific project
    ```bash
    npx playwright test --project=chromium
    ```
- Disable parallelization
    ```bash
    npx playwright test --workers=1
    ```

## Additional Tips:
- **Continuous Integration**: Consider integrating your test suite with a CI/CD tool like GitHub Actions, GitLab CI, or CircleCI to automate test runs on code changes.
- **Reporting**: Use Playwright's built-in HTML reporter or integrate with tools like Allure for better test result visualization.

Feel free to adjust any section according to your project specifics or personal preferences!
