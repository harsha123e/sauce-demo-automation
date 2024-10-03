const { defineConfig } = require('@playwright/test');

const isHeadless = process.env.HEADLESS;
const headless = isHeadless.toLowerCase().localeCompare('true') === 1
const browserName = process.env.BROWSER || 'chromium'; // Default to chromium if not specified

module.exports = defineConfig({
    use: {
        headless: headless, // Use headless mode based on environment variable
        browserName: browserName, // Use specified browser or default to chromium
    },
    reporter: 'html',
    timeout: 30000,
    retries: 1,
    workers: 5, // Control the number of parallel tests
});
