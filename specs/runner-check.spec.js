const { test, expect } = require('@playwright/test');

test('runner-check: simple js test', async ({ page }) => {
  await page.goto('about:blank');
  expect(1 + 1).toBe(2);
});
