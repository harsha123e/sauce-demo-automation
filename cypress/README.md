# Automated Testing Framework Setup with Cypress

To implement your automated testing project for the SauceDemo website using Cypress, here’s a step-by-step guide:

## 1. **Plan Test Cases with Steps**
- Clearly outline your test scenarios, expected outcomes, and detailed steps for each test case to maintain clarity and direction.

## 2. **Install Node.js and npm**
- Ensure you have Node.js and npm installed. Verify the installations using the following commands:
  ```bash
  node -v
  npm -v
  ```

## 3. **Create a New Cypress Project**
- Create a new directory for your project and navigate to it:
  ```bash
  mkdir sauce-demo-automation
  cd sauce-demo-automation
  ```
- Initialize a new npm project:
  ```bash
  npm init -y
  ```
- Install Cypress:
  ```bash
  npm install cypress --save-dev
  ```

## 4. **Open Cypress for the First Time**
- Open Cypress using the following command:
  ```bash
  npx cypress open
  ```
- This will open the Cypress welcome screen.
- Select E2E Testing to start setting up end-to-end tests.
- Choose a browser from the list (e.g., Chrome or Electron) and click on Start E2E Testing.
- You will be prompted to create a new spec file. This action will generate a cypress folder containing example tests, including the necessary configuration files.

## 5. **Write the Page Object Model (POM) Files**
- Create a directory for your page objects, for example:
  ```bash
  mkdir cypress/support/pages
  ```
- Create a file for each page (e.g., `LoginPage.js`) and define methods to interact with those pages:
  ```javascript
  // cypress/support/pages/LoginPage.js
  class LoginPage {
      visit() {
          cy.visit('https://www.saucedemo.com');
      }

      enterUsername(username) {
          cy.get('input[id="user-name"]').type(username);
      }

      enterPassword(password) {
          cy.get('input[id="password"]').type(password);
      }

      submit() {
          cy.get('input[type="submit"]').click();
      }
  }
  
  export default new LoginPage();
  ```

## 6. **Write the Test Cases**
- Create your test files in the `cypress/e2e` folder. For example:
  ```javascript
  // cypress/integration/login.spec.js
  import LoginPage from '../support/pages/LoginPage';

  describe('Login Tests', () => {
      it('should log in successfully with valid credentials', () => {
          LoginPage.visit();
          LoginPage.enterUsername('standard_user');
          LoginPage.enterPassword('secret_sauce');
          LoginPage.submit();

          cy.url().should('include', '/inventory.html');
          cy.get('.title').should('have.text', 'Products');
      });
  });
  ```

## 7. **Run Tests in Headless Mode and with Multiple Browsers**

Note: Cypress is currently experiencing an open issue that prevents it from accessing saucedemo.com in certain browsers. Additionally, there are known challenges with cookie handling, which may cause all test cases to fail despite being correctly implemented.

### Headless Mode
- Cypress allows you to run tests in headless mode with a simple command:
  ```bash
  npx cypress run
  ```
- To specify the browser for headless execution, you can use:
  ```bash
  npx cypress run --browser chrome
  ```
- For headless execution, Cypress defaults to running in headless mode when using the `run` command. This means it runs without opening a browser window, making it faster and suitable for continuous integration.

### Interactive Mode
- If you want to run tests and see the browser's graphical interface while they are executing, use the following command:
  ```bash
  npx cypress open
  ```

## 8. **Set Up Parallel Execution**
- Cypress supports parallel test execution natively when integrated with CI/CD services. To run tests in parallel:
  - Use the `--parallel` flag with your `run` command when using a CI/CD service.
  - Ensure you have an account on the Cypress Dashboard to manage parallel runs.

## 9. **Configuration for CI/CD**
- If you’re using a CI/CD tool (like Jenkins, GitHub Actions, etc.), add a configuration file specific to your CI/CD environment. Here's an example for GitHub Actions:
  ```yaml
  name: Cypress Tests

  on: [push]

  jobs:
    cypress-run:
      runs-on: ubuntu-latest
      steps:
        - name: Checkout code
          uses: actions/checkout@v2
        - name: Install Node.js
          uses: actions/setup-node@v2
          with:
            node-version: '14'
        - name: Install dependencies
          run: npm install
        - name: Run Cypress tests
          run: npx cypress run --record --parallel
          env:
            CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
  ```

## Additional Tips:
- **Reporting**: Use plugins like [Cypress Dashboard](https://www.cypress.io/dashboard/) or [mochawesome](https://github.com/adamgruber/mochawesome) for better test result visualization.
- **Custom Commands**: Utilize Cypress's ability to create custom commands in `cypress/support/commands.js` for frequently used functions, improving reusability.

Feel free to adjust any section based on your project specifics or personal preferences!