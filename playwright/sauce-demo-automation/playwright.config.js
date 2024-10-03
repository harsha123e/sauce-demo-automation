const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    reporter: 'html',
    timeout: 30000,
    retries: 1,
    workers: 5,
});
