const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    reporter: [['html', { outputFolder: 'playwright-report' }], ['list']],
    timeout: 30000,
    retries: 1,
    workers: 5,
});
