import { test, expect } from '@playwright/test';

test('diagnostic: simple test', async ({ page }) => {
  expect(true).toBe(true);
});
