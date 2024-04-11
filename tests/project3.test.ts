import { test } from '@playwright/test';

test('project3 (e2e noAuth)', async () => {
  console.log('project 3 (e2e noAuth) started')
  await new Promise(r => setTimeout(r, 10_000));
  console.log('project 3 (e2e noAuth) (10s) finished')
});
