# Udemy Cypress Modern Automation Testing Course

Dokumentasi materi yang sudah dipelajari dari course Udemy: **Learning Cypress Modern Automation Testing from Scratch + Frameworks**

## 🚀 Setup & Installation

### Prerequisites
- Node.js (versi 14 atau lebih baru)
- Git

### Langkah-langkah Setup

1. **Clone repository ini**
   ```bash
   git clone <URL_GITHUB_ANDA>
   cd Udemy_Cypress
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables** (opsional)
   - Buat file `.env` di root project jika diperlukan (contoh untuk `CYPRESS_RECORD_KEY`)

4. **Verifikasi instalasi**
   ```bash
   npx cypress verify
   ```

## 📝 Cara Menjalankan Test

### Menjalankan Test dengan UI (Test Runner)

```bash
# Buka Cypress Test Runner (default browser)
npm run cy-open

# Buka dengan browser spesifik
npm run cy-open-chrome
npm run cy-open-firefox
npm run cy-open-edge
```

### Menjalankan Test Headless (CLI)

```bash
# Run semua test (headless mode)
npm run cy-run

# Run dengan browser spesifik (headless)
npm run cy-run-headless-chrome
npm run cy-run-headless-firefox
npm run cy-run-headless-edge
```

### Menjalankan Test Headed (dengan UI browser)

```bash
# Run dengan browser visible
npm run cy-run-headed-chrome
npm run cy-run-headed-firefox
npm run cy-run-headed-edge
```

### Menjalankan Test Spesifik

```bash
# Run test di folder TestExampleEcommers
npm run TestExampleEcommers

# Run test spesifik dengan spec path
npx cypress run --spec "cypress/e2e/E2E-TEST/Test1.cy.js"
```

### Menjalankan Test BDD (Cucumber)

```bash
# Run semua BDD feature files (headless)
npm run cy-run-cucumber

# Buka Cypress Runner untuk BDD (Chrome)
npm run cy-open-cucumber-open

# Run BDD tests dengan Chrome (headless)
npm run cy-run-cucumber-chrome

# Run BDD tests dengan Chrome (headed via CLI)
npm run cy-run-cucumber-headed
```

### Filtering Test BDD dengan Tags

Anda bisa menggunakan Tags (seperti `@Smoke`, `@Regression`) di dalam file `.feature` untuk menjalankan scenario tertentu.

```bash
# Run test dengan tag @Regression (menggunakan script npm)
npm run cy-run-cucumber-regression

# Run test dengan tag @Smoke (menggunakan script npm)
npm run cy-run-cucumber-smoke

# Run manual dengan npx (langsung di terminal)
npx cypress run --spec "cypress/e2e/BDD Features/**/*.feature" --env TAGS="@Regression"
```

### 📊 Setup Cucumber HTML Report

Agar laporan HTML Cucumber yang cantik bisa digenerate, ada **satu langkah manual** yang wajib dilakukan:

1. **Download Formatter**:
   - Buka: [Cucumber JSON Formatter Releases](https://github.com/cucumber/json-formatter/releases/tag/v19.0.0)
   - Download file untuk Windows: `cucumber-json-formatter-windows-amd64`
2. **Setup File**:
   - Rename file yang didownload menjadi `cucumber-json-formatter.exe`
   - Pindahkan file `.exe` tersebut ke **root folder project** ini (`Udemy_Cypress/`).

**Cara Generate Report:**

```bash
# 1. Jalankan Test BDD (ini akan membuat file JSON mentah)
npm run cy-run-cucumber

# 2. Generate HTML Report (ini akan membuka report di browser otomatis)
npm run generate-html-report
```

---

## 📖 Panduan Lengkap Setup Cucumber Report dari Nol

Berikut adalah langkah-langkah teknis yang dilakukan untuk menghasilkan setup report di atas (sebagai referensi jika ingin setup di project baru):

### 1. Install Library
Install library `multiple-cucumber-html-reporter` untuk mengubah output JSON menjadi HTML.
```bash
npm install multiple-cucumber-html-reporter --save-dev
```

### 2. Config JSON Output
Aktifkan output JSON pada plugin cucumber di `package.json`:
```json
"cypress-cucumber-preprocessor": {
    "json": {
        "enabled": true,
        "output": "cypress/reports/cucumber-json/cucumber-report.json"
    }
}
```

### 3. Setup JSON Formatter (Wajib)
Cucumber versi baru membutuhkan `cucumber-json-formatter` untuk format output yang benar.
1. Download file executable dari [GitHub Releases](https://github.com/cucumber/json-formatter/releases).
2. Rename menjadi `cucumber-json-formatter.exe`.
3. Simpan di root folder project (sejajar dengan `package.json`).

### 4. Buat Script Generator
Buat file `generate-report.js` di root folder:
```javascript
const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './cypress/reports/cucumber-json/',
    reportPath: './cypress/reports/html-multi-cucumber-report/',
    openReportInBrowser: true, // Otomatis buka browser
    metadata: {
        browser: { name: 'chrome', version: 'latest' },
        device: 'Local Test Machine',
        platform: { name: 'windows', version: '11' }
    }
});
```

### 5. Tambahkan NPM Script
Tambahkan perintah ini di `package.json` -> `scripts`:
```json
"generate-html-report": "node generate-report.js"
```

---

### Recording Test ke Cypress Dashboard

```bash
# Record test results ke Cypress Dashboard
npm run recordDashboardTest
```

### Code Formatting

```bash
# Format semua file dengan Prettier
npm run format
```

## 📁 Struktur Project

```text
Udemy_Cypress/
├── .github/
│   └── workflows/
│       └── main.yml           # CI/CD configuration (GitHub Actions)
├── cypress/
│   ├── e2e/
│   │   ├── API-TEST/          # API Automation Tests
│   │   ├── BDD Features/      # Cucumber Feature files (.feature)
│   │   ├── step_definitions/  # Cucumber Step Definitions (.js)
│   │   ├── E2E-TEST/          # End-to-end spec files
│   │   ├── SMOKE-TEST/        # Smoke tests
│   │   └── TestExampleEcommers/ # Sample Ecommerce tests
│   ├── fixtures/              # Test data files (JSON)
│   ├── support/
│   │   ├── Page_Object_Model/ # POM classes
│   │   ├── commands.js        # Custom commands
│   │   └── e2e.js             # Global setup
│   └── reports/               # HTML/JSON Reports
├── cypress.config.js          # Main Cypress configuration
├── package.json               # Dependencies & scripts
└── README.md                  # Dokumentasi Project
```

---

## Daftar Materi

1. What is Cypress? And why it is future of Automation (11min)
2. Course syllabus walkthrough (4min)
3. Understand Cypress Architecture and its benefits (7min)
4. Reference document Notes (1min)
5. Important Player Tips for best learning Experience (3min)
6. How this Course track on all the new version releases coming from Cypress (1min)
7. Install Node.js, VS Code & Cypress for Windows and MAC (17min)
    - Quiz 1: Quiz-Check your knowledge
8. Action plan to complete Javascript learning (1min)
9. What is Cypress TestRunner (14min)
10. Important Note on Cypress Versions (4min)
11. Build Cypress Basic test and run from test Runner (9min)
12. Running Cypress tests in supported browsers (11min)
13. Exploring the Cypress project Framework structure (9min)
    - Quiz 2: Quiz-Check your knowledge
14. Important Note (1min)
15. Cypress locator strategies and how to construct them (8min)
16. Cypress inbuilt plugin in testRunner to generate locators (6min)
17. Basic Assertion in writing the tests with Cypress (6min)
18. Handling Invisible elements with Cypress by understanding logs (7min)
    - Quiz 3: Quiz-Check your knowledge
19. Web applications to Practise Cypress Automation (3min)
20. Understanding get and find commands with Cypress (15min)
21. Grabbing the text for validations using cypress text command (15min)
22. Cypress ASynchronous nature and its promise handling (10min)
23. Understanding the difference between Jquery methods and cypress commands (17min)
24. Handing Async promises with Cypress (13min)
25. code download (1min)
26. Completing the Practise test with all necessary validations (10min)
27. code download (1min)
    - Quiz 4: Quiz-Check your knowledge
28. How to verify and automate check boxes with Cypress (17min)
29. Handling static dropdowns using select command with Cypress (7min)
30. Handling Dynamic dropdowns with each command Iteration (12min)
31. Handling Visible and invisible elements using Assertions in Cypress (10min)
32. Code download (1min)
    - Quiz 5: Quiz-Check your knowledge
33. How Cypress auto handles Alerts in web Apps (20min)
34. Handling Child tab with combination of Cypress & Jquery commands (18min)
35. code download (1min)
    - Assignment 1: Child Windows Assignment
36. Handling Web tables with Cypress using each command (22min)
37. code download (1min)
38. Handling Mouse hover popus using Cypress (14min)
    - Quiz 6: Quiz-Check your knowledge
39. Handling Child windows using Cypress (17min)
40. Handling Frames with Cypress using real time example (15min)
41. code download (1min)
42. Cypress Concepts Cheat Sheet download (1min)
    - Quiz 7: Quiz-Check your knowledge
43. Strategy of automating calendars using Cypress (11min)
44. End to end example of validating calendars with assertions using Cypress (19min)
45. code download (1min)
46. Understand End to End Test flows for Ecommerce application with design plan (10min)
47. Use Cypress filter methods to select the items dynamically with user input (11min)
48. Parsing the output Strings to number and apply JS logic with promise (17min)
49. Wrapping up the end to end Cypress Automation test with demo run (9min)
50. Using Cypress fixtures to load the data externally into Tests - Example (10min)
51. Implementing global configuration changes to Cypress framework (6min)
52. Important Note (1min)
53. What is Page object Design pattern? how pattern can be applied to Cypress tests (9min)
54. Create Page object classes and drive the associate code from the lectures (11min)
55. Cypress Custom commands setup & pause, log commands usage (8min)
56. Understand how to return values from method when (nested then promises involved) (16min)
    - Quiz 8: Quiz-Check your knowledge
57. Importance of environmental variables in CYpress framework (18min)
58. Cypress Mochawesome reporting for generating reports with videos & Screenshots (12min)
    - Quiz 9: Quiz-Check your knowledge
    - Quiz 10: Quiz-Check your knowledge
59. Exploring Cypress Dashboard and its feature for framework development (9min)
60. Monitoring Test Execution Videos& Screenshots through Cypress dashboard (5min)
61. Rerun failed tests with Cypress retries configuration (5min)
62. Config file download (1min)
    - Quiz 11: Quiz-Check your knowledge
63. Understanding Scripting commands in Package.json file for CI Integration (12min)
64. Introduction to Jenkins (10min)
65. Integrating Cypress framework into Jenkins CI tool (15min)
66. What is BDD and Cucumber? Benefits of it (8min)
67. Install badeball Cucumber Cypress Preprocessor Plugin to integrate cucumber (9min)
68. Implement Feature file for Ecommerce Test and get started with Step Def file (9min)
69. How to share state of variables across multiple methods in Step Def file (12min)
70. Run the Cucumber feature from Test Runner with config changes in Cypress.config (7min)
71. Parameterize Test Data using Scenario outline & Tags to group the tests (13min)
72. Building Cucumber Html reports for the Cypress Cucumber Tes Scenarios (15min)
73. Code download (1min)
74. Intrroduction to Cypress Intercept to Manage Http requests (11min)
75. Mock HTTP Responses for generating Stub Data to test edge Scenarios (13min)
76. Integration Testing with Front end and Back End response validation assertions (13min)
77. Code Download (1min)
78. Intercepting HTTP request details to test Security Scenarios (13min)
79. Code Download (1min)
80. Important Note (1min)
81. Handling API call directly with out involving browser with cypress (10min)
    - Quiz 12: Quiz-Check your knowledge
82. Understand how JWT Session token works on browsers with example (7min)
83. Make Login API Calls to extract the response token using Cypress (7min)
84. How to save the Login tokens in browser Local storage using Cypress (9min)
85. Complete End to end flow of Purchasing the order with UI Script (17min)
86. Where Cypress downloads the browser files and how to get Project path dynamicaly (10min)
87. Parsing CSV files into JavaScript object using Cypress neat CSV plugin (9min)
88. Code download (1min)
89. Setting up SQL Server with Azure for Cypress Testing (14min)
90. Cypress DB Plugin Integration for DB Testing (22min)
91. How to read excel files through Cypress with available Plugins (16min)
92. What are Cypress Tasks and Execute tasks into Tests with necessary plugins (19min)
93. importance of cy.readFile to verify the Excel data and its valid assertions (6min)
94. Important Note (1min)
95. Introduction to excelJS node module and setting up JS Project (9min)
96. Traversing rows and columns of excel worksheet with excelJS library (17min)
97. Build Util functions to read and update excel file strategically (13min)
98. How to get and update the data from excel based on filter search criteria (17min)
99. Code download (1min)
100. Cypress task creation to handle excel Node based code in config file (10min)
101. Calling Cypress tasks into Test with multiple parameters - Example (12min)
102. Download & Uploading the files into Cypress with File edits using Cypress tasks (8min)
103. Identifying web table data based on Search filter conditions using Cypress (8min)
104. Code download - Tasks code (1min)
105. code download - Cypress code (1min)
106. Generate Cypress script in Studio and refactor it using github copilot plugin (11min)
107. Download Course Code (1min)
108. How to showcase your Cypress knowledge (1min)
109. Thankyou Note (1min)
110. Important Note (1min)
111. Complete 3 hours JavaScript Tutorial for Automation Testing (2hr 55min)


    - Coding Exercise 1: Calculate basic statistics (total, max, min) using for loop and if else condition logics
    - Coding Exercise 2: Manipulate an array of strings (add, remove, sort)
    - Coding Exercise 3: Apply transformations and calculations to array elements, and filter elements based on a condition

112. How the Interview questions video is designed? (1min)
113. Questions list with Timestamp (1min)
114. 75 Mins In detail discussion on commonly asked JavaScript Interview Questions (1hr 23min)
115. Bonus Lecture (1min)

---

> **Catatan:**  
> Materi di atas adalah rangkuman dari course Udemy Cypress Automation yang sudah dipelajari.  
> Untuk kode dan catatan tambahan, cek folder dan file terkait di repository ini.
