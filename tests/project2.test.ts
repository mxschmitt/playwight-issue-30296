import { test } from '@playwright/test';

test('project2 (e2e auth)', async () => {
  console.log('project 2 (e2e auth) started')
  await new Promise(r => setTimeout(r, 5_000));
  console.log('project 2 (e2e auth) (5s) finished')
});
