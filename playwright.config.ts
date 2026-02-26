import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  reporter: [['html', { open: 'never' }]],

  projects: [
    // login setup - runs once to authenticate and save storage state 
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
      testIgnore: ['tests/api/**'],
      use: {
        testIdAttribute: 'data-test',
        baseURL: 'https://www.saucedemo.com',
      },
    },

    {
      name: 'chromium',
      testIgnore: ['tests/api/**'],
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://www.saucedemo.com',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        testIdAttribute: 'data-test',
        storageState: '.auth/standard.json',
      },
      dependencies: ['setup'],
    },

    {
      name: 'firefox',
      testIgnore: ['tests/api/**'],
      use: {
        ...devices['Desktop Firefox'],
        baseURL: 'https://www.saucedemo.com',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        testIdAttribute: 'data-test',
        storageState: '.auth/standard.json',
      },
      dependencies: ['setup'],
    },

    {
      name: 'webkit',
      testIgnore: ['tests/api/**'],
      use: {
        ...devices['Desktop Safari'],
        baseURL: 'https://www.saucedemo.com',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        testIdAttribute: 'data-test',
        storageState: '.auth/standard.json',
      },
      dependencies: ['setup'],
    },

    // API Testing
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