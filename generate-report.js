const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './cypress/reports/cucumber-json/',
    reportPath: './cypress/reports/html-multi-cucumber-report/',
    openReportInBrowser: true,
    metadata: {
        browser: {
            name: 'chrome',
            version: '100',
        },
        device: 'Local Test Machine',
        platform: {
            name: 'windows',
            version: '11',
        },
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: 'Udemy Cypress Project' },
            { label: 'Release', value: '1.0.0' },
            { label: 'Execution Time', value: new Date().toLocaleString() },
        ],
    },
});
