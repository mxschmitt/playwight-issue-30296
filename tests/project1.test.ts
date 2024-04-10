import { test } from '@playwright/test';

test('test', async () => {

  console.log('project 1 (slow) started')
  await new Promise(r => setTimeout(r, 10_000));
  console.log('project 1 (slow) finished')
});
