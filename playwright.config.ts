import { defineConfig } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'list',
  projects: [
    {
      name: 'login project',
      testMatch: /project1/
    },

    {
      name: 'e2e auth project',
      dependencies: ['login project'],
      testMatch: /project2/
    },

    {
      name: 'e2e non-auth project',
      testMatch: /project3/
    },
  ],
});
