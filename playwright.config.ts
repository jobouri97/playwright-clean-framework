import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  reporter: [['html', { open: 'never' }]],

  projects: [
    // 1) مشروع Setup: يشغّل فقط ملفات .setup.ts ويولّد storageState
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
      testIgnore: ['tests/api/**'],
      use: {
        testIdAttribute: 'data-test',
        baseURL: 'https://www.saucedemo.com',
      },
    },
    // 2) Chromium
    {
      name: 'chromium',
      testIgnore: ['tests/api/**'],
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://www.saucedemo.com',
        trace: 'on-first-retry',
        testIdAttribute: 'data-test',
        storageState: '.auth/standard.json',
      },
      dependencies: ['setup'],
    },

    // 3) Firefox
    {
      name: 'firefox',
      testIgnore: ['tests/api/**'],
      use: {
        ...devices['Desktop Firefox'],
        baseURL: 'https://www.saucedemo.com',
        trace: 'on-first-retry',
        testIdAttribute: 'data-test',
        storageState: '.auth/standard.json',
      },
      dependencies: ['setup'],
    },

    // 4) WebKit (Safari-like)
    {
      name: 'webkit',
      testIgnore: ['tests/api/**'],
      use: {
        ...devices['Desktop Safari'],
        baseURL: 'https://www.saucedemo.com',
        trace: 'on-first-retry',
        testIdAttribute: 'data-test',
        storageState: '.auth/standard.json',
      },
      dependencies: ['setup'],
    },

    // 5) API Testing
    {
      name: 'api',
      testDir: './tests/api',
      testMatch: ['tests/api/**/*.spec.ts'],
      use: {
        baseURL: 'https://dummyjson.com',
      },
    }
  ],
});