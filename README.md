# Playwright Clean API Framework

A clean and scalable Playwright API automation framework built with TypeScript and strong type safety.

---

## 🚀 Why This Project?

- Fully Type-Safe API models (No `any`)
- Clean layered architecture (Client / Models / Tests)
- Reusable API Client using Playwright APIRequestContext
- Structured CRUD + Flow test coverage
- Portfolio-ready project structure

---

## 🛠 Tech Stack

- Playwright
- TypeScript
- Node.js
- DummyJSON (Mock API)

---

## 📂 Project Structure
src/
├── api/
│ ├── clients/
│ ├── models/
│ └── fixtures/
├── pages/
├── test-data/
├── utils/
tests/
├── api/
├── e2e/
├── smoke/
└── setup/
playwright.config.ts
tsconfig.json


---

## ⚙ Installation
```bash
npm install
```

## ▶ Run Tests

### Run API Tests
```bash
npx playwright test --project=api
```

### Run UI Tests (Chromium)
```bash
npx playwright test --project=chromium
```

### Run All Tests
```bash
npx playwright test
```

## 🧪 Test Coverage
API Tests
GET Users
POST Create User
PUT Update User
DELETE User
Flow test (handling DummyJSON mock behavior correctly)
UI Tests
Login flow
Add to cart
Checkout flow
Smoke tests

## 📌 Design Principles

Clean Architecture separation
Strong Type Safety
Reusable Clients
Scalable folder structure
Maintainable test design

## 📖 Summary

This project demonstrates practical API and UI automation skills using Playwright with a clean, production-style structure suitable for real-world QA and SDET team