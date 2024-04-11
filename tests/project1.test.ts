import { test } from '@playwright/test';

test('project1 (login test)', async () => {
  console.log('project 1 (login test) started')
  await new Promise(r => setTimeout(r, 2_000));
  console.log('project 1 (login test) (2s) finished')
});
